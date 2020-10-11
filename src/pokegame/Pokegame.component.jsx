import React, { Component } from 'react';
import Pokedex from '../pokedex/Pokedex.component';
import POKEDEX_DATA from '../pokedex/Pokedex.data';
import './Pokegame.styles.css';

export default class Pokegame extends Component {
	static defaultProps = {
		pokemon: POKEDEX_DATA,
	};

	render() {
		let hand1 = [];
		let hand2 = [...this.props.pokemon];

		while (hand1.length < hand2.length) {
			let randIndex = Math.floor(Math.random() * hand2.length);
			let randPokemon = hand2.splice(randIndex, 1)[0];
			hand1.push(randPokemon);
		}

		let exp1 = hand1.reduce(
			(exp, pokemon) => exp + pokemon.base_experience,
			0
		);
		let exp2 = hand2.reduce(
			(exp, pokemon) => exp + pokemon.base_experience,
			0
		);

		return (
			<div className="Pokegame">
				<h1>Pokegame!</h1>
				<Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
				<Pokedex pokemon={hand2} exp={exp2} isWinner={exp1 < exp2} />
			</div>
		);
	}
}
