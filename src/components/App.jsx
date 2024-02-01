import React from "react";
import CatalogPage from "./Catalog/Catalog";
import Header from "./Header/Header";
import HomePage from "./HomePage/HomePage";


export const App = () => {
  return (
    <>
    <div>
       <Header />
      <HomePage /> 
    </div>
       <CatalogPage />  
    </>
  );
};
