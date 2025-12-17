import styles from "./Dashboard.module.css"

import FollowerCardContainer from "../features/FollowerCount/FollowersCardContainer/FollowerCardContainer";
import FGOContainer from "../features/FollowerGrowthOverview/FGOContainer/FGOContainer";

function Dashboard() {

  return(
    <section className={styles.mainPage}>
      <div className={styles.topBackground}></div>

      <main className={styles.mainContent}>
        <FollowerCardContainer />
        <FGOContainer />
      </main>
    </section>
  );
}

export default Dashboard