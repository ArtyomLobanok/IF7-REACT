import React from 'react';
import './App.css';
import Header from '../AppHeader/Header';
import Footer from "../AppFooter/Footer";
import HomesGuestsLoves from "../HomesGuestsLoves/HomesGuestsLoves";


function App(){
  return (
      <>
        <Header/>
        <HomesGuestsLoves/>
        <Footer/>
      </>
  );
}

export default App;
