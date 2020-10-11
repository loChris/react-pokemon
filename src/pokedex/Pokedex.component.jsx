import React, { Component } from 'react';
import Pokecard from '../pokecard/Pokecard.component';
import POKEDEX_DATA from './Pokedex.data';

export default class Pokedex extends Component {
	static defaultProps = {
		pokemon: POKEDEX_DATA,
	};
	render() {
		return (
			<div className="Pokedex">
				<h1>Pokedex!</h1>
				{this.props.pokemon.map((p) => (
					<Pokecard
						id={p.id}
						name={p.name}
						type={p.type}
						exp={p.base_experience}
					/>
				))}
			</div>
		);
	}
}
