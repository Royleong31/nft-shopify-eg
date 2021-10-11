import type { NextPage } from "next";
import { FormEvent, useEffect, useState } from "react";
import { useAppContext } from "../wrapper/ContextWrapper";
import { ethers, Contract } from "ethers";

import Landing from "../components/Landing";
import OtherSections from "../components/OtherSections";
import Mint from "../components/Mint";

const Home: NextPage = () => {
	const { account, contract, provider } = useAppContext();
	const [ethBalance, setEthBalance] = useState("");
	const [numberMinted, setNumberMinted] = useState(0); // default will be shown for ppl without metamask
	const [transactionError, setTransactionError] = useState<string | undefined>();

	const [isSaleStarted, setIsSaleStarted] = useState(true);
	const price = "0.1"; // ?: 0.1 ETH

	const ERROR_CODE_TX_REJECTED_BY_USER = 4001;

	useEffect(() => {
		if (!provider) return;

		provider.getBalance(account).then(bal => {
			// ?: Balance of the connected account in ETH
			const balanceInEth = ethers.utils.formatEther(bal);
			setEthBalance(balanceInEth);
		});

		contract?.isSaleStarted().then((status: boolean) => {
			setIsSaleStarted(status);
		});

		// ?: Update at the start, and every 1s interval from then on
		async function getTokenCount() {
			const tokenCount = await contract?.tokenCount();
			console.log(`Inside getTokenCount: ${tokenCount}`);
			setNumberMinted(tokenCount.toString());
		}

		getTokenCount();

		const tokenInterval = setInterval(getTokenCount, 1000);

		return () => {
			clearInterval(tokenInterval);
			console.log("clearing getTokenCount");
		};
	}, [account]);

	async function submitHandler(event: FormEvent) {
		event.preventDefault();
		// ?: This is used when we allow the user to mint multiple
		// const numberToBeMinted = +mintingNum;
		// const amtPayable = (numberToBeMinted * +defaultPrice).toFixed(2);

		try {
			// ?: Remove any prior transaction errors
			setTransactionError(undefined);
			// const tx = await token.buyTokens(tokenNum, { value: ethers.utils.parseEther(tokenNum) });
			const tx = await contract!.mint({ value: ethers.utils.parseEther(price) });

			// ?: txBeingSent will be shown in a banner to tell the user that the transaction is mining
			console.log(tx);
			const receipt = await tx.wait();
			console.log(receipt);

			// ?: if receipt.status === 0, it means that there's an error
			if (receipt.status === 0) {
				// We can't know the exact error that made the transaction fail when it
				// was mined, so we throw this generic one.
				throw new Error("Transaction failed");
			}

			const newNumberMinted = await contract!.tokenCount();
			setNumberMinted(newNumberMinted.toString());
			alert("Mint Successful!");
		} catch (error: any) {
			// We check the error code to see if this error was produced because the
			// user rejected a tx. If that's the case, we do nothing.
			if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {
				return;
			}

			console.log(error);

			if (error.data) {
				setTransactionError(error.data.message);
			}

			setTransactionError("Check that you have enough ether");
			alert("Check that you have enough ether to mint");
		}
	}

	// ?: Return a placeholder in the event that no wallet is connected
	// if (!provider) {
	// 	return (
	// 	);
	// }

	return (
		<>
			<Landing />
			<Mint submitHandler={submitHandler} />
			<OtherSections />
		</>
	);
};

// export async function getStaticProps(context) {
// 	require("dotenv").config();

// 	const _provider = new ethers.providers.InfuraProvider("rinkeby", process.env.INFURA_API_KEY);
// 	const _contract = new Contract(SierpinskiNFT.address, SierpinskiNFT.abi, _provider);

// 	const defaultNumberMinted = (await _contract.tokenCount()).toString();
// 	const defaultMaxSupply = (await _contract.maxSupply()).toString();
// 	const defaultPrice = ethers.utils.formatEther((await _contract.price()).toString());

// 	return {
// 		props: {
// 			defaultNumberMinted,
// 			defaultMaxSupply,
// 			defaultPrice,
// 		},
// 		revalidate: 2,
// 	};
// }

export default Home;
