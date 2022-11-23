import React, { Component } from 'react';
import Card from './Card';
import classes from './Pokelist.module.css'

class Pokelist extends Component{
    state = {
        data:[],
        isLoading: false,
    };
    componentDidMount() {
        this.setState({
            isLoading: true
        });

        fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
        .then(res => res.json())
        .then((data) => {
            const fetches = data.results.map(p => {
            return fetch(p.url).then(res => res.json())
        });
        Promise.all(fetches).then((res) => 
            this.setState({
            data: res, 
            isLoading: false
        }))
    })
}
    render() {
        console.log(this.state.data);
        if(this.state.isLoading) {
            return <p>Loading...</p>
        }
        return (
        <div className={classes.cards}>
            {this.state.data.map((card) => (
                <Card key={card.name} name={card.name} image={card.sprites.other["official-artwork"].front_default}
                />
            ))}
        </div>
        );
    }
};


export default Pokelist;
