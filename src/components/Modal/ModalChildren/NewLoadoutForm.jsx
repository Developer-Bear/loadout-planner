import styles from "./NewLoadoutForm.module.css";
import Button from "../../button/Button";

function NewLoadoutForm({ newLoadoutInput, setNewLoadoutInput, submitNewLoadout }) {
	return (
		<div>
			<input className={styles.input} type="text" placeholder="Enter loadout name" value={newLoadoutInput} onChange={(e) => setNewLoadoutInput(e.target.value)} />
			<div className={styles.modalButtonWrapper}>
				<Button title={"Create"} action={() => submitNewLoadout(newLoadoutInput)} />
			</div>
		</div>
	);
}

export default NewLoadoutForm;
