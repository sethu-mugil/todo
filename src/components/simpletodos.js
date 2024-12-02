import React, { Component } from "react";

const intializetodos = [
  { id: 1, quotes: "Life is short, make it sweet." },
  { id: 2, quotes: "Happiness is a journey, not a destination." },
  { id: 3, quotes: "Dream big. Start small. Act now." },
  { id: 4, quotes: "Collect moments, not things." },
  { id: 5, quotes: "Do what makes your soul shine." },
  { id: 6, quotes: "Life happens when you’re busy living." },
  { id: 7, quotes: "Every day is a second chance." },
  { id: 8, quotes: "Be a voice, not an echo." },
  { id: 9, quotes: "Less stress, more smiles." },
  { id: 10, quotes: "Live simply, love generously." },
];

class Simpletodos extends Component {
  state = { todolist: intializetodos };

  onDeletetodos = (id) => { 

    const updatedTodoList = this.state.todolist.filter(todo => todo.id !== id);
    this.setState({ todolist: updatedTodoList });
  };

  render() {
    const { todolist } = this.state;

    return (
      <>
      <div className= "main-container"> 
        <h1 classname = "main-Heading">Simple ToDOs</h1> 
        <div>
          <input type = "text" placeholder="Enter Todo..."/> 
          <button></button>
      </div>
        <ul>
          {todolist.map(todo => (
            <li key={todo.id}>
              {todo.quotes}
              <button className=" todo-button" onClick={() => this.onDeletetodos(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      </>
    );
  }
}

export default Simpletodos;