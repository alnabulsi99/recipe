import styles from "./Styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { FETCHCATEG } from "../../../Redux/CategRducer/actions";
import { Card, Row, Col } from "react-bootstrap";
import { FetchSingleCategory } from "../../../Redux/CategRducer/actions";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const dispatch = useDispatch();
  const { categories,category } = useSelector((state) => state.CategReducer);
  const nav = useNavigate();
  function Handlebtn(category) {
    dispatch(FetchSingleCategory(category));
    nav("./RecipePage");
  }
  useEffect(() => {
    dispatch(FETCHCATEG());
  }, []);


  return (
    <Row className={styles.wrapper}>
      {categories.map((category) => (
       
          <Card className={styles.card}>
            <Card.Img variant="top" src={category.category_picture} />
            <Card.Body className={styles.cardBody}>
              <Card.Title className={styles.cardTitle}>{category.name}</Card.Title>
              <Card.Text className={styles.cardText}>{category.description}</Card.Text>
              <button onClick={() => Handlebtn(category)}>See Recipes</button>
            </Card.Body>
          </Card>
      
      ))}
    </Row>
  );
};

export default LandingPage;
