import React, { useState } from "react";
import styles from "./Styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AddComment } from "../../../Redux/CategRducer/actions";

const SubDishesPage = () => {
  const { recipe } = useSelector((state) => state.CategReducer);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  
  function HandleClick(comment) {
    console.log("test")
    dispatch(AddComment(comment));
    alert("COMMENT ADDED");
  }
console.log(recipe)
  return (
    <div className={styles.wrapper}>
      <h2>{recipe.name}</h2>
      <div className={styles.imageAndDescription}>
        <div className={styles.image}>
          <img src={recipe.picture} alt="Recipe" className={styles.img1} />
        </div>
        <div className={styles.description}>
          <p>
            <strong>Recipe Name:</strong> {recipe.name}
          </p>
          <p>
            <strong>Recipe Ingredients:</strong> {recipe.ingredients}
          </p>
          <p>
            <strong>Recipe Description:</strong> {recipe.description}
          </p>
        </div>
      </div>
      <div className={styles.comment}>
        <h2>Add Comment</h2>
        <input
          placeholder="Enter your Comment"
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={() => HandleClick(comment)}>Add Comment</button>
      </div>
      <div className={styles.comments}>
        <p>Comments posted:</p>
        <div>{recipe.comments}</div>
      </div>
    </div>
  );
};

export default SubDishesPage;
