import React from "react";
import './FormOfSeach.css'
import {FirstForm} from './FormSearchofHotels/FormSearchofHotels'
import MyDataPicker from "./Data-picker/DataPicker";



function Form ({setSearchData}) {

    const handleClick = () => {


    };
    console.log(setSearchData)
    return (
            <div className="intro__content">
                <form className="intro__form" id="mainForm" onClick={handleClick}>
                    {/*//Search --->*/}
                    <FirstForm setSearchData={setSearchData}/>
                    {/*//Calendar --->*/}
                    <MyDataPicker/>
                    {/*//Modal Menu --->*/}
                    <div className="third__input" id="mainMenu">
                        <div className="form__item input">
                            <span className="counterNumber" id="adultsCounter"/>
                            Adults
                            <span className="third__inputHyphen">—</span>
                        </div>
                        <div className="form__item input">
                            <span className="counterNumber" id="childrenCounter"/>
                            Children
                            <span className="third__inputHyphen">—</span>
                        </div>
                        <div className="form__item input">
                            <span className="counterNumber" id="roomsCounter"/>
                            Room
                        </div>
                    </div>
                    <div className="positionModalMenu">
                        {/*BUTTON HERE*/}
                        <button type='submit' className="form__button search">Search</button>

                        <div className="modalMenu" id="modalMenu">
                            <div className="counterContainer">
                                <div className="namesNumberChanger">
                                    <label htmlFor="adultsInput">Adults</label>
                                    <label htmlFor="childrenInput">Children</label>
                                    <label htmlFor="roomsInput">Rooms</label>
                                </div>
                                <div className="counters">
                                    <div className="counter">
                                        <div className="numberChanger">
                                            <button type="button" className="btnCounterMin">-</button>
                                            <input className="thirdInputs" id="adultsInput" type="number" disabled
                                                   name="adults"/>
                                            <button type="button" className="btnCounterPlus btnActive">+</button>
                                        </div>
                                    </div>
                                    <div className="counter">
                                        <div className="numberChanger">
                                            <button type="button" className="btnCounterMin ">-</button>
                                            <input className="thirdInputs" id="childrenInput" type="number" disabled
                                                   name="children"/>
                                            <button type="button" className="btnCounterPlus btnActive">+</button>
                                        </div>
                                    </div>
                                    <div className="counter">
                                        <div className="numberChanger">
                                            <button type="button" className="btnCounterMin ">-</button>
                                            <input className="thirdInputs" id="roomsInput" type="number" disabled
                                                   name="rooms"/>
                                            <button type="button" className="btnCounterPlus btnActive">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="addAgeChildren" id="childrenSelectorsTitle">
                                What is the age of the child you’re <br/> travelling with?
                            </div>
                            <div className="selectors" id="childrenSelectors"/>
                        </div>
                    </div>
                </form>
            </div>
    );
}

export default Form;