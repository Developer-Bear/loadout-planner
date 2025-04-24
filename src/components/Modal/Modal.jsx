import styles from "./Modal.module.css";
import { IoCloseCircle } from "react-icons/io5";

const Modal = ({ isOpen, onClose, title, children }) => {
	if (!isOpen) return null;

	return (
		<div className={styles.overlay} onClick={onClose}>
			<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
				<div className={styles.closeButtonWrapper} onClick={onClose}>
					<IoCloseCircle />
				</div>
				{title && <h2>{title}</h2>}
				<div className={styles.content}>{children}</div>
			</div>
		</div>
	);
};

export default Modal;
