import { Link } from 'react-router-dom';
import React from 'react';
import classes from './Card.module.css'
const Card = (props) => {
    return (
        <div className={classes.card}>
            <img src={props.image} alt={"props.name"} />
            <h3>{props.name}</h3>
            <Link className={classes.link} to={`${props.name}`}>See more here</Link>
        </div>
    );
};

export default Card;