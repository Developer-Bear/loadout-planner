import { useState } from "react";
import packageJson from "../package.json";
import styles from "./App.module.css";
import { MdHelpOutline } from "react-icons/md";
import Home from "./components/Home/Home";
import Modal from "./components/Modal/Modal";
import Loadout from "./components/Loadout/Loadout";
import Help from "./components/Modal/ModalChildren/Help";
import NewLoadoutForm from "./components/Modal/ModalChildren/NewLoadoutForm";

function App() {
	const [loadouts, setLoadouts] = useState([
		{
			id: 1,
			title: "Range",
			description: "Rucksack, weapon, and overnight needs",
			items: [
				{ name: "Flashlight", quantity: 1, weight: 1 },
				{ name: "Empty Magazine", quantity: 6, weight: 0.5 },
			],
			flags: ["overnight", "rain"],
		},
		{
			id: 2,
			title: "Drill",
			description: "Everything needed for MUTA 4 drill",
			items: [
				{ name: "Orange Juice", quantity: 1, weight: 4 },
				{ name: "Pillow", quantity: 1, weight: 0.5 },
			],
			flags: ["overnight"],
		},
		{
			id: 3,
			title: "Field Ops Kit",
			items: [
				{ name: "Water Bottle", quantity: 2, weight: 1.2 },
				{ name: "Rations Pack", quantity: 3, weight: 0.5 },
				{ name: "First Aid Kit", quantity: 1, weight: 1.8 },
				{ name: "Ammunition Box", quantity: 4, weight: 2.5 },
				{ name: "Flashlight", quantity: 1, weight: 0.3 },
				{ name: "Batteries", quantity: 3, weight: 0.1 },
				{ name: "Multi-tool", quantity: 1, weight: 0.4 },
				{ name: "Paracord", quantity: 2, weight: 0.2 },
				{ name: "Map", quantity: 1, weight: 0.05 },
				{ name: "Compass", quantity: 1, weight: 0.1 },
				{ name: "Rain Poncho", quantity: 1, weight: 0.6 },
				{ name: "Tent", quantity: 1, weight: 4.5 },
				{ name: "Sleeping Bag", quantity: 1, weight: 3.0 },
				{ name: "Gas Mask", quantity: 1, weight: 1.1 },
				{ name: "Helmet", quantity: 1, weight: 1.3 },
				{ name: "Radio", quantity: 1, weight: 1.4 },
				{ name: "Extra Clothing", quantity: 2, weight: 0.8 },
				{ name: "Boots", quantity: 1, weight: 2.0 },
				{ name: "Knife", quantity: 1, weight: 0.5 },
				{ name: "Rope (30ft)", quantity: 1, weight: 1.2 },
				{ name: "Cooking Pot", quantity: 1, weight: 1.5 },
				{ name: "Stove", quantity: 1, weight: 2.3 },
				{ name: "Fuel Canister", quantity: 2, weight: 1.0 },
				{ name: "Medical Tape", quantity: 2, weight: 0.2 },
				{ name: "Binoculars", quantity: 1, weight: 0.9 },
				{ name: "Notebook", quantity: 1, weight: 0.3 },
				{ name: "Pencil", quantity: 3, weight: 0.05 },
				{ name: "Duct Tape", quantity: 1, weight: 0.6 },
				{ name: "Gloves", quantity: 1, weight: 0.3 },
				{ name: "Hand Warmers", quantity: 4, weight: 0.05 },
			],
			flags: [],
		},
	]);

	const [showModal, setShowModal] = useState(false);
	const [modalData, setModalData] = useState({ title: "", type: null });
	const [activeLoadoutID, setActiveLoadoutID] = useState(null);
	const [newLoadoutInput, setNewLoadoutInput] = useState("");

	const openCreateLoadoutModal = () => {
		setModalData({ title: "Create Loadout", type: "new-loadout" });
		setShowModal(true);
	};

	const submitNewLoadout = (title) => {
		if (!title.trim()) return;
		setLoadouts((prev) => [...prev, { id: Date.now(), title: title, description: "", items: [], flags: [] }]);
		setShowModal(false);
		setNewLoadoutInput("");
	};

	const openHelpModal = () => {
		setModalData({ title: "Help", type: "help" });
		setShowModal(true);
	};

	return (
		<div className={styles.container}>
			<span className={styles.version}>v{packageJson.version}</span>
			<div className={styles.helpWrapper} onClick={openHelpModal}>
				<MdHelpOutline />
			</div>

			<Modal isOpen={showModal} onClose={() => setShowModal(false)} title={modalData.title}>
				{modalData.type === "new-loadout" && <NewLoadoutForm newLoadoutInput={newLoadoutInput} setNewLoadoutInput={setNewLoadoutInput} submitNewLoadout={submitNewLoadout} />}
				{modalData.type === "help" && <Help />}
			</Modal>

			<div className={styles.content}>{activeLoadoutID ? <Loadout loadouts={loadouts} setLoadouts={setLoadouts} activeLoadoutID={activeLoadoutID} setActiveLoadoutID={setActiveLoadoutID} /> : <Home loadouts={loadouts} setLoadouts={setLoadouts} createNewLoadout={openCreateLoadoutModal} setActiveLoadoutID={setActiveLoadoutID} />}</div>
		</div>
	);
}

export default App;
