import React from 'react';
import LandingPage from './components/pages/LandingPage/LandigPage';
import { Route, Routes } from 'react-router-dom';
import RecipePage from './components/pages/RecipePage/RecipePage'
import Navbar from "./components/navbar/navbar";
import SubDishesPage from './components/pages/SubDishesPage/SubDishesPage';
import AddDishPage from './components/pages/AddDishPage/AddDishPage';

function App() {
  return (
    <>
    <Navbar/>

    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/AddDishPage" element={<AddDishPage />} /> 

       <Route path="/SubDishesPage" element={<SubDishesPage />} /> 
      <Route path="/RecipePage" element={<RecipePage />} />
    </Routes>
    </>
  );
}

export default App;
