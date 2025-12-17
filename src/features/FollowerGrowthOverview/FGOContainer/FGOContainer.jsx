import styles from "./FGOContainer.module.css"
import FGOInfosCard from "../FGOInfosCard/FGOInfosCard";
import { platforms } from "../../FollowerCount/FollowerCard/FollowerCard";
import data from "../data-overview.json"

function FGOContainer() {

  return(
    <div className={styles.overviewComponent}>

      <h1 className={styles.overviewHeading}>Overview - Today</h1>
      <section className={styles.overviewStatsContainer}>
        
        {
          data.map(({ platform, category, quantity, status, changes, key }) => {
            
            return(
              <FGOInfosCard 
                platform={platforms[platform]}
                category={category}
                quantity={quantity}
                status={status}
                changes={changes}
                key={key}
              />
            );

          })
        }

      </section>

    </div>
  );
}

export default FGOContainer