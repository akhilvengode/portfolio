import styles from "./index.module.css";

export const Card = ({ image, title, url }) => {
  return (
    <div className={styles.card}>
      <a href={url} target="_blank" rel="noreferrer">
        <div className={styles.card__container}>
          <img src={image} alt={title} />
          <div className={styles.card__title}>{title}</div>
        </div>
      </a>
    </div>
  );
};
