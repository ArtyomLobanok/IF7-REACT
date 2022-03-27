import React from "react";
import './FormOfSeach.css'

class Form extends React.Component {
    state = {
        name: '',
    };

    handleClick = () => {
    };

    handleChange = (e) => {
        this.setState({
            name: e.target.value,
        });
    };

    render() {
        const {name} = this.state;

        return (
            <div className="intro__content">
                <form className="intro__form" id="mainForm" onClick={this.handleClick}>
                    {/*//Search --->*/}
                    <div className="first__input">
                        {/*//360px --->*/}
                        {/*<a href="/#" className="form__icon">*/}
                        {/*    <svg className="icon__search">*/}
                        {/*        <use href="#search"/>*/}
                        {/*    </svg>*/}
                        {/*</a>*/}
                        <div className="form__item">
                            <input autoComplete="off" type="text" name="name" id="searchName" className="form__input"
                                   required value={name} onChange={this.handleChange}/>
                            <label className="form__label" htmlFor="name">Your destination or hotel
                                name</label>
                        </div>
                    </div>
                    {/*//Calendar --->*/}
                    <div className="second__input">
                        <div className="form__item">
                            <input autoComplete="off" name="in_date" id="in_date" className="form__input" required/>
                            <label className="form__label" htmlFor="in_date">Check-in date</label>
                        </div>
                        <div className="form__item">
                            <input autoComplete="off" name="out_date" id="out_date" className="form__input"
                                   required/>
                            <label className="form__label" htmlFor="out_date">Check-out date</label>
                        </div>
                    </div>
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
                        <button className="form__button search">Search</button>
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
}

export default Form