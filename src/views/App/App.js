import React from 'react';
import './App.css';
import Header from '../HeaderApp/Header';
import Footer from "../FooterApp/Footer";
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