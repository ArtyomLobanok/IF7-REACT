import React from 'react';
import "./ListItem.css"

const handleClickLink = (e) => {
    e.preventDefault();
    return false;
}

const ListItem = (props) => {
    return <a className="footerLink" href="/#" onClick={handleClickLink}>{props.text}</a>
}

export default ListItem;