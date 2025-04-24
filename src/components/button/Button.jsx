import styles from "./Button.module.css";

function Button({ title, action }) {
	return (
		<button className={styles.button} onClick={action}>
			{title}
		</button>
	);
}

export default Button;
