import styles from "./FollowerCardContainer.module.css"

import ThemeToggle from "../../ThemeSwitching/ThemeToggle";

function FollowerCardContainer() {

  return(
    <section className={styles.mainContainer}>

      <div className={styles.heroSection}>
        <h1 className={styles.appName}>Social Media Dashboard</h1>
        <p className={styles.totalFollowers}>Total Follower: 23, 004</p>
        
        <hr className={styles.divider}/>

        <div className={styles.toggleTheme}>
          <p className={styles.currentTheme}>Dark Mode</p>
          <ThemeToggle />
        </div>
      </div>

    </section>
  );
}

export default FollowerCardContainer