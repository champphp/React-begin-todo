import React,{Component} from 'react';
import TodoItem from './TodoItem';

class Main extends Component{
    state = {
        
    };

    
    render(){
        const liNodes = this.props.todos.map((todo)=> {
            return (
                <TodoItem key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    completed = {todo.completed}
                    ondelete = {this.props.ondelete}
                    oncompleted = {this.props.oncompleted}
                    status = {this.props.status}
                />
            );
        });
        return (
            <section className="main">
            <button onClick={this.props.onReset}>Reset todo</button>
                <input type="checkbox" className="toggle-all" />
                <ul className="todo-list">
                    {liNodes}
                </ul>
            </section>
        )
    }
}

export default Main;