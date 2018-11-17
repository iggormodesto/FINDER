import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Input,
  Button
} from 'reactstrap';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
    	professionals: [
        { 
          id: 1,
          name: "Rafael Santos", 
          distance: 15.8, 
          occupation: "Garçom", 
          availability: false 
        },
        { 
          id: 2,
          name: "Tiago Cardos", 
          distance: 9.8, 
          occupation: "Pedreiro", 
          availability: true  
        },
        { 
          id: 3,
          name: "Anna Dias", 
          distance: 5.1, 
          occupation: "Faxineira", 
          availability: true  
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main className="container">
          <div className="row">
            <h1>Finder</h1>
            <Input className="entrada profissao" type="text" name="filter" id="filter" placeholder="Pesquisar" />
            <Input className="entrada distancia" type="text" name="distancia" id="km" placeholder="Distância Máxima (km)" />
            <ul id="list" className="List">
              {this.state.professionals.map(person => (
                <li>
                  <Input type="checkbox" />
                  <h4>{person.name}</h4>
                  <p>{person.occupation}</p>
                  <p><b>Distância:</b> {person.distance} Km</p>
                </li>
              ))}
            </ul>
            <Button outline color="success">TRAÇAR ROTA</Button>{' '}
          </div>
        </main>
        <footer><h6>Trabalho 2 - Teoria dos Grafos</h6></footer>
      </div>
    );
  }
}

export default App;
