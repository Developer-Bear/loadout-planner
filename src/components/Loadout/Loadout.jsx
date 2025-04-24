import styles from "./Loadout.module.css";
import { IoChevronBackCircle } from "react-icons/io5";

import Button from "../button/Button";

function Loadout({ loadouts, setLoadouts, activeLoadoutID, setActiveLoadoutID }) {
	const activeLoadout = loadouts.find((loadout) => loadout.id === activeLoadoutID);

	return (
		<div className={styles.container}>
			<div className={styles.backButtonWrapper}>
				<Button title={"Back"} action={() => setActiveLoadoutID(null)} />
			</div>
			<h1>{activeLoadout.title}</h1>
			<div className={styles.itemsList}>
				{activeLoadout.items.map((item, index) => (
					<div key={index} className={styles.loadoutItemContainer}>
						<span className={styles.itemName}>{item.name}</span>
						<span className={styles.itemQuantity}>{item.quantity}x</span>
						<span className={styles.itemWeight}>{item.weight} lbs</span>
					</div>
				))}
			</div>
		</div>
	);
}

export default Loadout;
