import type { NextPage } from "next";
import Landing from "../components/Landing";
import Mint from "../components/Mint";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/pages/index.module.scss";
import Button from "../components/UI/Button";

const Home: NextPage = () => {
	return (
		<>
			<Landing />
			<Mint />
			<section id="roadmap" className={styles.section}>
				<h4>Roadmap</h4>
				<h2>Our Roadmap</h2>
				<hr />
				<img src="/roadmap.png" className={styles.img} />
			</section>

			<section id="rarity" className={styles.section}>
				<h2 className={styles.header}>TRAIT RARITY</h2>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
					industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book.
				</p>
				<img className={styles.rarityImg} src="/rarityCommon.png" alt="" />
				<img className={styles.rarityImg} src="/rarityUncommon.png" alt="" />
				<img className={styles.rarityImg} src="/rarityRare.png" alt="" />
				<img className={styles.rarityImg} src="/raritySuperRare.png" alt="" />
				<Button>View Traits</Button>
			</section>

			<section id="team" className={styles.section}>
				<h4 className={styles.teamHeader}>Our Team</h4>
				<img src="/team.png" alt="" className={styles.teamImg} />
			</section>

			<section id="features" className={styles.section}>
				<h4>Our</h4>
				<h2 className={styles.header}>Special Features</h2>
				<hr />
				<img src="/features.png" className={styles.img} />
			</section>

			<section id="faq" className={styles.section}>
				<h2 className={styles.header}>Frequently Asked Questions</h2>
				<hr />
				<img src="/faq.png" className={styles.img} />
			</section>

			<section id="signup" className={styles.section}>
				<img src="/signup.png" className={styles.img} />
			</section>
		</>
	);
};

export default Home;
