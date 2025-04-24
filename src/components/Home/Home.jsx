import { useState } from "react";
import styles from "./Home.module.css";
import Button from "../button/Button";
import LoadoutPreview from "../LoadoutPreview/LoadoutPreview";

function Home({ loadouts, setLoadouts, createNewLoadout, setActiveLoadoutID }) {
	const [expandedLoadoutID, setExpandedLoadoutID] = useState(null);

	const handleExpandLoadout = (id) => {
		setExpandedLoadoutID((prevId) => (prevId === id ? null : id));
	};

	return (
		<div className={styles.container}>
			<h1>Loadout Planner</h1>
			<Button title={"Create Loadout"} action={createNewLoadout} />
			<div className={styles.loadoutsContainer}>
				{loadouts.map((loadout) => (
					<LoadoutPreview key={loadout.id} id={loadout.id} title={loadout.title} description={loadout.description} items={loadout.items} flags={loadout.flags} expanded={expandedLoadoutID === loadout.id} onExpand={() => handleExpandLoadout(loadout.id)} setActiveLoadoutID={setActiveLoadoutID} />
				))}
			</div>
		</div>
	);
}

export default Home;
