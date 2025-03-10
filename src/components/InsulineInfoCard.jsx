import styles from './InsulineInfoCard.module.scss'

const InsulineInfoCard = () => {
  return (
    <div className={styles["insulin-card"]}>
      <p>Cada <b>15 g</b> de carbohidratos</p>
      <p className={styles.equals}>=</p>
      <p><b>1 unidad</b> de insulina</p>
    </div>
  );
};

export default InsulineInfoCard;
