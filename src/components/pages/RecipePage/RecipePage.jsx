import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import styles from "./Styles.module.css";
import { fetchRecipe } from "../../../Redux/CategRducer/actions";
import { useNavigate } from "react-router-dom";

const RecipePage = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.CategReducer);
  console.log(category);
  const nav = useNavigate();

  function Handlebtn(recipe) {
    dispatch(fetchRecipe(recipe));
    nav("../SubDishesPage");
  }



  return (
    <div className={`d-flex flex-wrap ${styles.wrapper}`}>
      {category.recipes.map((recipe) => (
        <div key={recipe.id} className={styles.recipeCard}>
          <Card >
            <Card.Img variant="top" src={recipe.picture} />
            <Card.Body>
              <Card.Title>{recipe.name}</Card.Title>
              <button onClick={() => Handlebtn(recipe)}>
                See Ingredients
              </button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default RecipePage;
