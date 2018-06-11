import React,{Component} from 'react';

class TodoItem extends Component {
    itemdelete = () => {
        const id = this.props.id;
        this.props.ondelete(id);
    }
    tiemcompleted = () =>{
        const id = this.props.id;
        const completed = this.props.completed;
        this.props.oncompleted(id,!completed);
    }
    checkstatus = () =>{
        const status = this.props.status;
        const completed = this.props.completed
        if(status === 'All'){
            return false;
        }else if(status === 'Active'){
            return completed; 
        }else if(status === 'Completed'){
            return !completed;
        }else{
            return true;
        }
    }
    render(){
        return (
            <li className={[this.props.completed ? 'completed' : '',this.checkstatus() ? 'hideItem' : ''].join(' ')} >
                <div className="view">
                    <input type="checkbox" 
                        className="toggle" 
                        defaultChecked={this.props.completed} 
                        onClick={this.tiemcompleted}
                    />
                    <label>{this.props.text}</label>
                    <button type="button" 
                    className="destroy" 
                    onClick={this.itemdelete}
                    />
                </div>
            </li>
            
        );
    }
}

export default TodoItem;