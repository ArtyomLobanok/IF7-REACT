import React from 'react';
import ListItem from "./ListItem/ListItem";
import "./FooterListColumb.css"

const FooterListColumb = () => {
    return (
        <div className="footerList">
            <ul className="footerColumn">
                <li><ListItem text="About"/></li>
                <li><ListItem text="How Triphouse works"/></li>
                <li><ListItem text="Careers"/></li>
                <li><ListItem text="Privacy"/></li>
                <li><ListItem text="Terms"/></li>
            </ul>
            <ul className="footerColumn">
                <li><ListItem text="Property types"/></li>
                <li><ListItem text="Guest houses"/></li>
                <li><ListItem text="Hotels"/></li>
                <li><ListItem text="Apartments"/></li>
                <li><ListItem text="Villas"/></li>
                <li><ListItem text="Holiday homes"/></li>
                <li><ListItem text="Hostels"/></li>
            </ul>
            <ul className="footerColumn">
                <li><ListItem text="Support"/></li>
                <li><ListItem text="Contact Customer Service"/></li>
                <li><ListItem text="FAQ"/></li>
            </ul>
        </div>
    )
}

export default FooterListColumb;