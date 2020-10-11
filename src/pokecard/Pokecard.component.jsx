import React, { Component } from 'react';
import './Pokecard.styles.css';

// const POKE_API =
//     'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

// To use the api we need to add slice digits because the api only recognizes 3 digits. Used in line 15.
const padToThree = (num) => (num <= 999 ? `00${num}`.slice(-3) : num);

export default class Pokecard extends Component {
	render() {
		const props = this.props;
		let imgSrc = `${POKE_API}${padToThree(props.id)}.png`;
		return (
			<div className="Pokecard">
				<h1 className="Pokecard-title">{props.name}</h1>
				<img src={imgSrc} alt={props.name} />
				<div className="Pokecard-data">Type: {props.type}</div>
				<div className="Pokecard-data">Exp: {props.exp}</div>
			</div>
		);
	}
}
