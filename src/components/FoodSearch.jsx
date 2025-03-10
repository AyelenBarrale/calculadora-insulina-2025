import { useState, useEffect } from "react";
import { database } from "../firebase";
import { ref, onValue } from "firebase/database";
import useDebounce from "../hooks/useDebounce";
import styles from "./FoodSearch.module.scss";
import PropTypes from 'prop-types';

const FoodSearch = ({ onAddFood, resetSearch }) => {
  const [query, setQuery] = useState("");
  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const debouncedQuery = useDebounce(query, 300); // Wait 300ms before filter operation

  useEffect(() => {
    const foodsRef = ref(database);
    onValue(foodsRef, (snapshot) => {
      const data = snapshot.val();
      setFoods(data ? data : []);
    });
  }, []);

  useEffect(() => {
    if (debouncedQuery.trim() === "") {
      setFilteredFoods([]);
    } else {
      setFilteredFoods(
        foods.filter((food) => {
          const lowerQuery = debouncedQuery.toLowerCase();
          const lowerNombre = food.nombre.toLowerCase();

          // Separa la consulta en palabras individuales
          const queryWords = lowerQuery.split(" ");

          // Verifica que **todas** las palabras de la búsqueda existan en el nombre
          return queryWords.every(word => lowerNombre.includes(word));
        })
      );
    }
  }, [debouncedQuery, foods]);

  useEffect(() => {
    if (resetSearch) {
      setQuery(""); // Resetear el input cuando resetSearch cambia
    }
  }, [resetSearch]);

  return (
    <div className={styles['food-search']}>
      <p className={styles.disclaimer}>*Si el alimento que buscás no figura en este listado, el mismo no requiere de ajuste de insulina. De igual modo, consultá previamente a tu nutricionista sobre su consumo.</p>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Busca un alimento..."
        value={query}
        onChange={(e) => setQuery(e.target.value.toLowerCase())} 
      />
      <ul className={styles.foodList}>
        {filteredFoods.map((food) => (
          <li key={food.id} className={styles.foodItem}>
            <span className={styles.foodName}>{food.nombre} </span>
            <span className={styles.foodPortion}>({food.porcion}) </span>
            <span className={styles.foodCarbs}>- {food.carb}g carbs </span>
            <button className={styles.addButton} onClick={() => onAddFood(food)}>➕</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

FoodSearch.propTypes = {
  onAddFood: PropTypes.func.isRequired,
  resetSearch: PropTypes.bool.isRequired
};

export default FoodSearch;
