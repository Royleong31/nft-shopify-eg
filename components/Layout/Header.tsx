import styles from "../../styles/components/Layout/Layout.module.scss";

export default function Header() {
	return (
		<header className={styles.header}>
			<a href="#">
				<img src="/logo.png" alt="logo" className={styles.logo} />
			</a>

			<ul>
				<li>
					<a href="#about">About Us</a>
				</li>

				<li>
					<a href="#roadmap">Roadmap</a>
				</li>

				<li>
					<a href="#faq">FAQs</a>
				</li>

				<li>
					<a href="#gallery">Gallery</a>
				</li>

				<li className={styles.cta}>
					<a href="#signup">
						<img src="/cta.png" alt="" />
						<p>Sign Up</p>
					</a>
				</li>
			</ul>
		</header>
	);
}

