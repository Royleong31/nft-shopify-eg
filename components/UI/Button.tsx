import { FC } from "react";
import styles from "../../styles/components/UI/UI.module.scss";

const Button: FC = ({ children }) => {
	return <button className={styles.button}>{children}</button>;
};

export default Button;
