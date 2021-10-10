import { FC } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout: FC = ({ children }) => {
	return (
		<div className="container">
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
