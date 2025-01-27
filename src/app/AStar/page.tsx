
import Astar from "../../components/aStar";
import styles from "./AstarPage.module.css"
import ParallaxBackground from "@/components/ParallaxSpace";

export default function page() {
  return (
    <ParallaxBackground>
      <div>
        <div className={styles.layout}>
            <div className={styles.content}> <Astar /> </div>
        </div>
      </div>
    </ParallaxBackground>
  );
}