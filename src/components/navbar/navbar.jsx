import React from "react";
import styles from "./Styles.modules.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className={`container ${styles.navContainer}`}>
        <div className={`row align-items-center ${styles.header}`}>
          <div className="col">
            <p className="fs-3">Estarta For Recipes</p>
          </div>
          <div className={`col-auto ${styles.buttonContainer}`}>
            <Link to={"./"} className={`btn btn-light me-3 ${styles.button}`}>
              Home
            </Link>
            <Link to={"./AddDishPage"} className={`btn btn-primary ${styles.button}`}>
              Add Recipe
            </Link>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
