import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list-component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			search_field: ''
		};
	}

	componentDidMount() {
		fetch('http://jsonplaceholder.typicode.com/users',{mode:'no-cors'})
			.then((response) => response.json())
			.then((data) => this.setState({ monsters: data }));
	}

	handleChange = (e) => {
		this.setState({ search_field: e.target.value }, () => console.log(this.state.search_field));
	};
	render() {
		const { monsters, search_field } = this.state;
		const filteredMonster = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(search_field.toLowerCase())
		);
		return (
			<div className="App">
				<h1>Monster Rolodex By Farjun</h1>
				<SearchBox placeholder="search monster" handleChange={this.handleChange} />
				<CardList monsters={filteredMonster} />
			</div>
		);
	}
}

export default App;
