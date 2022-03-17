import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import HomesGuestsLoves from "../HomesGuestsLoves/HomesGuestsLoves";


function App(){
  return (
    <div className="container">
        <Header/>
        <HomesGuestsLoves/>
        <Footer/>
    </div>
  );
}

export default App;
