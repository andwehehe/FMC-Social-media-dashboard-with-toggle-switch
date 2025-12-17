import styles from "./FGOInfosCard.module.css"
import increase from "/src/assets/icons/icon-up.svg"
import decrease from "/src/assets/icons/icon-down.svg"

function FGOInfosCard({ platform, category, quantity, status, changes }) {

  const computedQuantity = quantity / 1000;
  let changesEval;
  
  if(status === "increased") {
    changesEval = "increased";
  } else if(status === "decreased") {
    changesEval = "decreased";
  }

  return(
    <article className={styles.statsCard}>
      
      <div className={styles.statsHeading}>
        <p className={styles.statsCategory}>{category}</p>
        <img src={platform} alt={category} />
      </div>

      <div className={styles.statsData}>
        <p className={styles.quantity}>{computedQuantity >= 10 ? computedQuantity + "k" : quantity}</p>
        <div className={`${styles.statsChanges} ${styles[changesEval]}`}>
          <img src={changesEval === "increased" ? increase : decrease} alt={status} />
          <span>{changes}</span>
        </div>
      </div>

    </article>
  );
}

export default FGOInfosCard