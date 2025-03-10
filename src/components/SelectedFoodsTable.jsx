import { useState } from "react";
import FoodSearch from "./FoodSearch";
import SelectedFoodItem from "./SelectedFoodItem";
import PropTypes from 'prop-types';
import styles from './SelectedFoodsTable.module.scss';

const SelectedFoodsTable = ({ selectedFoods, setSelectedFoods }) => {
  const [resetSearch, setResetSearch] = useState(false);

  // Agregar alimento
  const addFood = (food) => {
    setSelectedFoods((prevFoods) => {
      const existingFood = prevFoods.find((item) => item.id === food.id);
      if (existingFood) {
        return prevFoods.map((item) =>
          item.id === food.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      return [...prevFoods, { ...food, cantidad: 1 }];
    });
  };

  // Actualizar cantidad de alimento (aumento o disminución)
  const updateFoodQuantity = (id, change) => {
    setSelectedFoods((prevFoods) =>
      prevFoods
        .map((food) =>
          food.id === id ? { ...food, cantidad: food.cantidad + change } : food
        )
        .filter((food) => food.cantidad > 0)  // Asegurarse de que la cantidad no sea cero
    );
  };

  // Eliminar alimento
  const deleteFood = (id) => {
    setSelectedFoods((prevFoods) => prevFoods.filter((food) => food.id !== id));
  };

  // Vaciar la tabla
  const clearTable = () => {
    setSelectedFoods([]);
    setResetSearch((prev) => !prev); // Cambia resetSearch para limpiar el input
  };

  return (
    <div className={styles['table-container']}>
      <h2>Buscador de alimentos</h2>
      <FoodSearch onAddFood={addFood} resetSearch={resetSearch} />

      {/* Solo mostrar el botón si hay alimentos */}
      {selectedFoods?.length > 0 && (
        <button onClick={clearTable} className={styles['clear-button']}>
          Vaciar Tabla
        </button>
      )}

      <h2>Alimentos seleccionados</h2>
      
      {/* Verificar si selectedFoods existe y tiene elementos */}
      {selectedFoods?.length > 0 ? (
        <table className={styles['foods-table']}>
          <thead>
            <tr>
              <th>Alimento</th>
              <th>Porciones</th>
              <th>Acciones</th>
              <th>Total Carbs</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {selectedFoods.map((food) => (
              <SelectedFoodItem
                key={food.id}
                food={food}
                onIncrease={updateFoodQuantity}
                onDecrease={updateFoodQuantity}
                onDelete={deleteFood}
                buttonStyles={{
                  increase: styles['action-button'],
                  decrease: styles['action-button'],
                  delete: styles['delete-button']
                }}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <div className={styles['empty-state']}>
          No hay alimentos seleccionados.
        </div>
      )}
    </div>
  );
};

SelectedFoodsTable.propTypes = {
  selectedFoods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      nombre: PropTypes.string.isRequired,
      carb: PropTypes.number.isRequired,
      cantidad: PropTypes.number.isRequired
    })
  ).isRequired,
  setSelectedFoods: PropTypes.func.isRequired
};

export default SelectedFoodsTable;
