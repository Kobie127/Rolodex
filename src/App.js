import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      characters: []
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({characters: users}))
  }

  render(){
    return (
      <div className="App">
        {
          this.state.characters.map(characters =>
             <h1 key={characters.id}>{characters.name}</h1>)
        }
      </div>
    );
  }
}

export default App;
