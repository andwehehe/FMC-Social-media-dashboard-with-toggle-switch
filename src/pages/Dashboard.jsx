import styles from "./Dashboard.module.css"

import FollowerCardContainer from "../features/FollowerCount/FollowersCardContainer/FollowerCardContainer";

function Dashboard() {

  return(
    <section className={styles.mainPage}>
      <div className="bgContainer">
        <div className="topBackground"></div>
        <div className="botBackground"></div>
      </div>

      <main className={styles.mainContent}>
        <FollowerCardContainer />
      </main>
    </section>
  );
}

export default Dashboard