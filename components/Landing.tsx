import styles from "../styles/components/Landing.module.scss";
import Button from "./UI/Button";

export default function Landing() {
	return (
		<section id="landing" className={styles.landing}>
			<div className={styles.left}>
				<h2>Welcome</h2>
				<h1>Our Mission</h1>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
					standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book.
				</p>
				<Button>Get started</Button>
			</div>

			<div className={styles.right}>
				<img src="/landing.png" alt="" />
			</div>
		</section>
	);
}
