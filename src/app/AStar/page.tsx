
import Astar from "../../components/aStar";
import styles from "./AstarPage.module.css"

// grid_container need an outer and inner so backgroubn

export default function page() {
  return (
    <div>
    <div className={styles.layout}>
          <div className={styles.content}> <Astar /> </div>
      
    </div>
    </div>
  );
}