import { FormEvent } from "react";
import styles from "../styles/components/Mint.module.scss";
import { useAppContext } from "../wrapper/ContextWrapper";
import Button from "./UI/Button";

interface Props {
	submitHandler: (event: FormEvent) => Promise<void>;
}

export default function Mint({ submitHandler }: Props) {
	const { provider } = useAppContext();
	console.log(provider);

	const noProviderHandler = (event: FormEvent) => {
		event.preventDefault();
	};

	return (
		<section className={styles.mint} id="mint">
			<div className={styles.card}>
				<img src="/mint.png" />

				<div className={styles.container}>
					<h4>MINT</h4>
					<h3>HOW TO BUY</h3>
					<p>Here is a brief informative video breaking down how to buy Life Token.</p>
					<ul>
						<MintItem content="If the video was unclear or if you cant understand something please let us know" />
						<MintItem content="If you have any questions please do not hesitate to contact us at the bottom of the website." />
					</ul>

					<form onSubmit={provider ? submitHandler : noProviderHandler}>
						<Button>Mint now</Button>
					</form>
				</div>
			</div>
		</section>
	);
}

function MintItem({ content }: { content: string }) {
	return (
		<li>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0.00990295 11.534C0.00990295 5.16434 5.22538 0 11.6581 0C18.0908 0 23.3063 5.16434 23.3063 11.534C23.3063 17.9036 18.0908 23.068 11.6581 23.068C5.22538 23.068 0.00990295 17.9036 0.00990295 11.534ZM5.83746 11.2472L10.6909 16.3404L18.4563 8.07728L17.044 6.72876L10.6647 13.4636L7.19544 9.87273L5.83746 11.2472Z"
					fill="#F9B816"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0.00990295 11.534C0.00990295 5.16434 5.22538 0 11.6581 0C18.0908 0 23.3063 5.16434 23.3063 11.534C23.3063 17.9036 18.0908 23.068 11.6581 23.068C5.22538 23.068 0.00990295 17.9036 0.00990295 11.534ZM5.83746 11.2472L10.6909 16.3404L18.4563 8.07728L17.044 6.72876L10.6647 13.4636L7.19544 9.87273L5.83746 11.2472Z"
					fill="url(#paint0_linear)"
					fillOpacity="0.45"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0.00990295 11.534C0.00990295 5.16434 5.22538 0 11.6581 0C18.0908 0 23.3063 5.16434 23.3063 11.534C23.3063 17.9036 18.0908 23.068 11.6581 23.068C5.22538 23.068 0.00990295 17.9036 0.00990295 11.534ZM5.83746 11.2472L10.6909 16.3404L18.4563 8.07728L17.044 6.72876L10.6647 13.4636L7.19544 9.87273L5.83746 11.2472Z"
					fill="#8B53FF"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0.00990295 11.534C0.00990295 5.16434 5.22538 0 11.6581 0C18.0908 0 23.3063 5.16434 23.3063 11.534C23.3063 17.9036 18.0908 23.068 11.6581 23.068C5.22538 23.068 0.00990295 17.9036 0.00990295 11.534ZM5.83746 11.2472L10.6909 16.3404L18.4563 8.07728L17.044 6.72876L10.6647 13.4636L7.19544 9.87273L5.83746 11.2472Z"
					fill="url(#paint1_linear)"
					fillOpacity="0.35"
				/>
				<defs>
					<linearGradient
						id="paint0_linear"
						x1="18.4179"
						y1="14.9379"
						x2="6.93306"
						y2="6.31235"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#FF2969" />
						<stop offset="1" stopColor="#F77A1C" />
					</linearGradient>
					<linearGradient
						id="paint1_linear"
						x1="18.4179"
						y1="14.9379"
						x2="6.93306"
						y2="6.31235"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#2932FF" />
						<stop offset="1" stopColor="#E680FF" />
					</linearGradient>
				</defs>
			</svg>
			<p>{content}</p>
		</li>
	);
}
