import styles from "./LoadoutPreview.module.css";
import { MdExpandCircleDown } from "react-icons/md";
import { GiNightSleep } from "react-icons/gi";
import { IoRainy } from "react-icons/io5";

function LoadoutPreview({ id, title, description, items, flags, expanded, onExpand, setActiveLoadoutID }) {
	const calculateTotals = (items) => {
		let totalWeight = 0;
		let totalItems = 0;

		items.forEach((item) => {
			totalWeight += item.weight * item.quantity;
			totalItems += item.quantity;
		});

		totalWeight = Math.round(totalWeight * 100) / 100;

		return { totalWeight, totalItems };
	};

	const { totalWeight, totalItems } = calculateTotals(items);

	return (
		<div className={styles.container}>
			<div className={styles.contentWrapper}>
				<div className={styles.headerContainer} onClick={() => setActiveLoadoutID(id)}>
					<h1 className={styles.title}>{title}</h1>
					<div className={styles.iconWrapper}>{flags.map((flag, index) => (flag === "overnight" ? <GiNightSleep key={flag + index} /> : flag === "rain" ? <IoRainy key={flag + index} /> : null))}</div>
				</div>

				<div className={`${styles.expansionContainer} ${expanded ? styles.expanded : styles.collapsed}`}>
					<div className={styles.expansionDetailsWrapper}>
						<span>{totalItems} items</span>
						<span>{totalWeight} lbs</span>
					</div>
					<span>{description}</span>
				</div>
			</div>
			<div className={styles.expandButton} onClick={onExpand}>
				<MdExpandCircleDown className={expanded ? styles.iconRotated : styles.iconDefault} />
			</div>
		</div>
	);
}

export default LoadoutPreview;
