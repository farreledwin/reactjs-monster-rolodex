import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list-component';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: []
		};
	}

	componentDidMount() {
		fetch('http://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((data) => this.setState({ monsters: data }));
	}
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
						<CardList name="farjun">
							{this.state.monsters.map((monsters) => <h1 key={monsters.id}>{monsters.name}</h1>)}
						</CardList>
					</a>
					<button onClick={() => this.setState({ string: 'hello farrel' })}>Change text</button>
				</header>
			</div>
		);
	}
}

export default App;
