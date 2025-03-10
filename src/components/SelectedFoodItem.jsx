const SelectedFoodItem = ({ food, onIncrease, onDecrease, onDelete, buttonStyles }) => {
  return (
    <tr>
      <td>{food.nombre}</td>
      <td>{food.cantidad}</td>
      <td>
        <button 
          onClick={() => onIncrease(food.id, 1)} 
          className={buttonStyles.increase}
        >
          ➕
        </button>
        <button 
          onClick={() => onDecrease(food.id, -1)} 
          className={buttonStyles.decrease}
        >
          ➖
        </button>
      </td>
      <td>{food.carb * food.cantidad}g</td>
      <td>
        <button 
          onClick={() => onDelete(food.id)} 
          className={buttonStyles.delete}
        >
          🗑️
        </button>
      </td>
    </tr>
  );
};

import PropTypes from 'prop-types';

SelectedFoodItem.propTypes = {
  food: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    nombre: PropTypes.string.isRequired,
    cantidad: PropTypes.number.isRequired,
    carb: PropTypes.number.isRequired
  }).isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  buttonStyles: PropTypes.shape({
    increase: PropTypes.string,
    decrease: PropTypes.string,
    delete: PropTypes.string
  }).isRequired
};

export default SelectedFoodItem;
