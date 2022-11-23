import React, { Component } from 'react';
import classes from './PokeSingle.module.css'

class PokeSingle extends Component {
    render() {
        return (
            <div className={classes.pokeSingle}>
                <p>Single poke will be here</p>
            </div>
        );
    }
}

export default PokeSingle;