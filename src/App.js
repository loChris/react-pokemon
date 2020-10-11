import React from 'react';
import Pokecard from './pokecard/Pokecard.component';
import './App.css';

function App() {
	return (
		<div className="App">
			<Pokecard id={4} name="Charmander" type="fire" exp={62} />
		</div>
	);
}

export default App;
