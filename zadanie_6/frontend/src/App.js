import './App.css';
import axios from 'axios';
import React from 'react';

export default class App extends React.Component {
  state = {
    todos: [],
    persons: [],
    chosenID: 1,
  }

  changeUser(event) {
    this.setState({chosenID: event.target.value});
  }
  changeCheckbox(index) {
    var temp = this.state.todos
    temp[index].completed = !temp[index].completed
    console.log(temp[index].completed)
    this.setState({todos: temp})
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then( res => {
      const persons = res.data
      this.setState({persons: persons})
      console.log(this.state.persons[0].name)
    });
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then( res => {
      const todos = res.data
      this.setState({todos})
    });
  }

  render() {
    return (
      <div className="App">
        <div className="inputed">
        Wprowadź ID usera:{' '}
          <input 
          type="number" 
          value={this.state.chosenID} 
          onChange={this.changeUser.bind(this)}
          >
          </input>
        </div>
        <ul>
          {
            this.state.persons.map(person =>
              <li hidden={person.id != this.state.chosenID}>
                {person.name} ID: {person.id}
              </li>
            )
          }
          <ul>
            { 
              this.state.todos.map((todo, index) => 
              <li hidden={todo.userId != this.state.chosenID}>
                {index} {todo.title}
                <input type="checkbox" checked={todo.completed} onChange={(arg) => this.changeCheckbox(index)} />
              </li>)
            }
          </ul>
          
        </ul>
      </div>
    );
  }
}