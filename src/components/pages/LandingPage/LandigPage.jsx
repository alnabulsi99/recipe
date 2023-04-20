import styles from "./Styles.modules.css";
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
        <Col xs={12} sm={6} md={4} lg={3} key={category.id}>
          <Card>
            <Card.Img variant="top" src={category.category_picture} />
            <Card.Body>
              <Card.Title>{category.name}</Card.Title>
              <Card.Text>{category.description}</Card.Text>
              <button onClick={() => Handlebtn(category)}>See Recipes</button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default LandingPage;
