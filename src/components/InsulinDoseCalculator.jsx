import PropTypes from 'prop-types';
import styles from './SelectedFoodsTable.module.scss';

const InsulinDoseCalculator = ({ foods }) => {
  // Calcular el total de carbs
  const totalCarbs = foods.reduce((total, food) => total + food.carb * food.cantidad, 0);

  // Calcular la dosis de insulina (1 dosis cada 15g de carbs)
  const insulinDose = Math.floor(totalCarbs / 15);

  return (
    <div className={styles['table-container']}>
      <table className={styles['foods-table']}>
        <tbody>
          <tr>
            <th>Total Carbs</th>
            <td>{totalCarbs}g</td>
          </tr>
          <tr>
            <th>Dosis de Insulina Requerida</th>
            <td>{insulinDose} dosis</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

InsulinDoseCalculator.propTypes = {
  foods: PropTypes.arrayOf(
    PropTypes.shape({
      carb: PropTypes.number.isRequired,
      cantidad: PropTypes.number.isRequired
    })
  ).isRequired
};

export default InsulinDoseCalculator;
