import React, {Component} from 'react';
//import logo from './logo.svg';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      characters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({characters: users}))
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  

  render(){
    const {characters, searchField } = this.state; 
    const filteredCharacters = characters.filter(character => 
        character.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
        <h1>Rolodex</h1>
        <SearchBox
          placeholder='Search...'
          handleChange = {this.handleChange}
        />
        <CardList characters={filteredCharacters}/>
    
     
      </div>
    );
  }
}

export default App;
