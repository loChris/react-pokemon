import React, { Component } from 'react';
import './Pokecard.styles.css';

const POKE_API =
	'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

export default class Pokecard extends Component {
	render() {
		const props = this.props;
		let imgSrc = `${POKE_API}${props.id}.png`;
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
