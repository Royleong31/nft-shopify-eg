import { FC, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../../styles/components/Layout/Layout.module.scss";

const Layout: FC = ({ children }) => {
	const [windowWidth, setWindowWidth] = useState(0);

	useEffect(() => {
		if (!window) return;
		setWindowWidth(window.innerWidth - 17);

		const handleResize = () => setWindowWidth(window.innerWidth - 17);
		window.addEventListener("resize", handleResize);

		console.log(window.innerWidth);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<>
			<img src="/bg1.png" className={styles.bg1} style={{ width: windowWidth }} />
			<div className="container">
				<Header />
				{children}
				<Footer />
			</div>
			<img src="/bg2.png" className={styles.bg2} style={{ width: windowWidth }} />
		</>
	);
};

export default Layout;
