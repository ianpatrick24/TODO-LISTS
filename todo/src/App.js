import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){//constructor
    super(props);

    this.state = {
      lists: [],
      newTodo: {
        text: ''
      }
    };

    this.handleChange = this.handleChange.bind(this);//ginagawa ni bind
    this.addTodo = this.addTodo.bind(this);
  }//hanggang dito ung constructor

  handleChange(e){ //function
    // e.preventDefault();
    const id = this.state.lists.length + 1;
    console.log(id);//for debugging

    this.setState({ //object lagi ang pinapasa
      newTodo:{
        id,
        text: e.target.value
       }
     }, () => console.log(this.state))
  }
  addTodo(e) {
   e.preventDefault();
   
   this.setState(prevState => {// pinapasa sa setstate para makita ung updated na state
     
    return({
      lists: prevState.lists.concat(prevState.newTodo)
    });
   })
   
   console.log(this.state);
  }
 
  removeTodo() {};
  editTodo() {};
  markTodo() {};
  
  render(){
    return (
    <div>
      <h1>Todo</h1>
      <input
       onChange={this.handleChange} //onchange events
       value={this.state.newTodo.text}//display input field sa user
       type="text"
       placeholder="Make coffee"
      />
      <button onClick={this.addTodo}>
        Add new Todo
      </button>
      <ul>
       {this.state.lists.map(todo => <li key={todo.id}>
       {todo.text}
       </li>
       )}

      </ul>
    </div>
    )
  }
}

export default App;
