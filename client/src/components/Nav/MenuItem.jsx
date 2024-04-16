import styles from "./MenuItem.module.css";

const MenuItem = ({ onClick, label }) => {
	//prettier-ignore
	return (
    <div
      onClick={onClick}
			className={styles.menuItem}>
			{label}
		</div>
	);
};

export default MenuItem;
