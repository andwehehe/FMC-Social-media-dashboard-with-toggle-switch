import styles from "./FollowerCardContainer.module.css"

import data from "../followers-data.json"
import FollowerCard from "../FollowerCard/FollowerCard";
import ThemeToggle from "../../ThemeSwitching/ThemeToggle";

function FollowerCardContainer() {

  return(
    <section className={styles.mainContainer}>

      <div className={styles.heroSection}>
        <div className={styles.headingContainer}>
          <h1 className={styles.appName}>
            Social Media Dashboard
          </h1>
          <p className={styles.totalFollowers}>
            Total Follower: 23,004
          </p>
        </div>
        
        <hr className={styles.divider}/>

        <div className={styles.toggleTheme}>
          <p className={styles.currentTheme}>Dark Mode</p>
          <ThemeToggle />
        </div>
      </div>

      <section className={styles.cardsContainer}>

        {
          data.map(({platform, username, followers, status, changes}) => {

            return(
              <FollowerCard 
                key={platform}
                platform={platform}
                username={username}
                followers={followers}
                status={status}
                changes={changes}
              />
            );
          })
        }

      </section>

    </section>
  );
}

export default FollowerCardContainer