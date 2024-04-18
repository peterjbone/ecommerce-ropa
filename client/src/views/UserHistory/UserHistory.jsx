import styles from "./UserHistory.module.css";
import { useStore } from "../../store.js";
import axios from "axios";

function UserHistory() {
	//prettier-ignore
	return ( 
    <div className={styles.userHistoryContainer}>
      <h1>Historial de compras</h1>
    </div>
   );
}

export default UserHistory;
