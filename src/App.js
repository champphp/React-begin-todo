import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'todomvc-app-css/index.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  state = {
    todos:[
        {id:1,text:'Go buy shoes',completed:false},
        {id:2,text:'Walk the dog',completed:true},
        {id:3,text:'Walk the cat',completed:false}

    ],
    status: 'All'
  };
  handClick = () =>{
    this.setState({
        todos:[]
    });
  };

  addTodo = (newtext) =>{
    let newId1 = 0; 
    if(this.state.counttodo === 0){
      newId1 = 1;
    }else{
      newId1 = this.state.todos[this.state.todos.length-1].id + 1;
    }
    // const newId = this.state.todos.length+1;
    const currentTodes = this.state.todos;
    
    currentTodes.push({id:newId1,text:newtext});
    this.setState({
      todos:currentTodes
    });
    
  };

  deleteTodo = (id) =>{
    const currentTodes = this.state.todos;

    const newtodo = currentTodes.filter((todo)=>{
      return todo.id !== id;
    });
    // this.reducedCount();
    this.setState({
      todos:newtodo
    });
  };

  toggleComplete = (id,completed) =>{
    const currentTodes = this.state.todos;

    this.setState({
      todos: currentTodes.map((todo)=> (todo.id === id) ? {...todo,completed}:todo)
    
    });

  };

  setStatus = (newstatus) =>{
    this.setState({
      status: newstatus
    });
  };

  countTodo = () =>{
    return this.state.todos.length;
  }

  render() {
    return (
      <div className="todoapp">
        <Header onSubmit={this.addTodo}/>
        <Main todos={this.state.todos} onReset={this.handClick} ondelete={this.deleteTodo} oncompleted={this.toggleComplete} status={this.state.status} />
        <Footer count={this.countTodo} status={this.state.status} onStatus={this.setStatus} />
      </div>
    );
  }
}

export default App;
