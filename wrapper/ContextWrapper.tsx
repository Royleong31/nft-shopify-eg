import { createContext, useContext, useEffect, useState, FC } from "react";
import { ethers, Contract } from "ethers";
import NFTShopify from "../contractData/NFTShopify.json";

enum NetworkID {
	rinkeby = 4,
	ropsten = 3,
	mainnet = 1,
	local = 31337,
}

interface ContextState {
	account: string;
	contract: ethers.Contract | undefined;
	provider: ethers.providers.Web3Provider | undefined;
}

const AppContext = createContext({} as ContextState);

const HARDHAT_NETWORK_ID = NetworkID.rinkeby;

declare let window: any; // ?: To prevent error with window.ethereum, because ethereum is not a property of window by default
const ContextWrapper: FC = ({ children }) => {
	const [selectedAddress, setSelectedAddress] = useState<string>();

	const [provider, setProvider] = useState<ethers.providers.Web3Provider>();
	const [contract, setContract] = useState<ethers.Contract>();

	useEffect(() => {
		// ?: Only connect wallet if metamask is connected
		// TODO: Fix this lousy any declaration
		if (window.ethereum) {
			connectWallet();
		} else {
			window.alert("No metamask connected! Please install metamask in order to mint tokens");
		}
	}, []);

	const accountsChangedHandler = ([newAddress]: string[]) => {
		if (newAddress === undefined) return _resetState();

		if (+window.ethereum.networkVersion !== HARDHAT_NETWORK_ID) {
			return;
		}

		_initialize();
	};

	const networkChangeHandler = ([networkId]: string[]) => {
		// ?: The user will be asked to connect wallet again
		// TODO: Make sure the user reconnects wallet
		_resetState();
		connectWallet();
	};

	async function connectWallet() {
		// ?: Remove any previous listeners to prevent outdated listeners from lingering after the network is changed
		window.ethereum.removeListener("accountsChanged", accountsChangedHandler);
		window.ethereum.removeListener("networkChanged", networkChangeHandler);

		window.ethereum.on("accountsChanged", accountsChangedHandler);

		// ?: Reset State if the network is changed
		window.ethereum.on("networkChanged", networkChangeHandler);

		console.log("connecting wallet");

		if (await _checkNetwork()) {
			_initialize();
		}
	}

	// ?: Runs when user connects wallet or when the user changes account
	// ?: store token contract in token, store the token symbol and name in contractData, and update user's balance every 1s
	async function _initialize() {
		await window.ethereum.enable();

		// ?: Initialise contract and provider
		const _provider = new ethers.providers.Web3Provider(window.ethereum);
		const signer = _provider.getSigner();
		const signerAddress = await signer.getAddress();

		const _contract = new Contract(NFTShopify.address, NFTShopify.abi, signer);

		// set the states
		setProvider(_provider);
		setSelectedAddress(signerAddress);
		setContract(_contract);
	}

	// ?: Runs when either the account is deleted or the network is changed. User will
	function _resetState() {
		setSelectedAddress(undefined);
	}

	// ?: Checks if selected network is Localhost:8545
	async function _checkNetwork() {
		const _provider = new ethers.providers.Web3Provider(window.ethereum);

		const networkId = (await _provider.getNetwork()).chainId;
		console.log(networkId);

		if (networkId === HARDHAT_NETWORK_ID) return true;

		window.alert("Pleae connect metamask to rinkeby test network");

		return false;
	}

	if (!provider) {
		return <>{children}</>;
	}

	// TODO: Find a way to remove the loading... on the page when the user is not on the correct network
	if (!selectedAddress || !contract) {
		return (
			<AppContext.Provider value={{ account: "", contract: undefined, provider: undefined }}>
				{children}
			</AppContext.Provider>
		);
	}

	return (
		<AppContext.Provider value={{ account: selectedAddress, contract, provider }}>{children}</AppContext.Provider>
	);
};

export function useAppContext() {
	return useContext(AppContext);
}

export default ContextWrapper;
