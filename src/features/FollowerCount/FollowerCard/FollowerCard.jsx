import styles from "./FollowerCard.module.css"
import facebook from "/src/assets/icons/icon-facebook.svg"
import twitter from "/src/assets/icons/icon-twitter.svg"
import instagram from "/src/assets/icons/icon-instagram.svg"
import youtube from "/src/assets/icons/icon-youtube.svg"
import increase from "/src/assets/icons/icon-up.svg"
import decrease from "/src/assets/icons/icon-down.svg"

// eslint-disable-next-line react-refresh/only-export-components
export const platforms = {
  facebook, twitter, instagram, youtube
};

function FollowerCard({ platform, username, followers, status, changes }) {

  const computedFollowers = followers / 1000;
  let changesEval;
  
  if(changes >= 20 && status === "increased") {
    changesEval = "increased";
  } else if(status === "decreased") {
    changesEval = "decreased";
  } else {
    changesEval = "neutral";
  }

  return(
    <article className={`${styles.followerCard} ${styles[platform]}`}>
      
      <div className={styles.cardHeading}>
        <img 
          src={platforms[platform]} 
          alt={platform} 
        />

        <p className={styles.username}>
          {username}
        </p>
      </div>

      <h2 className={styles.numOfFollwers}>
        {computedFollowers >= 10 ? computedFollowers + "k" : followers} 
        <br /> 
        <span>FOLLOWERS</span>
      </h2>

      <div className={styles.cardFooter}>
        <img src={status === "increased" ? increase : decrease} alt="changes" />
        <p className={styles[changesEval]}>
          {changes} Today
        </p>
      </div>

    </article>
  );
}

export default FollowerCard