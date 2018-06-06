import React,{Component} from 'react';

class Header extends Component{
    handleChange = () =>{
        
            this.props.onSubmit('test');
        
    }

    handleKeyUp = (event) =>{
        // console.log(event.keyCode);
        if(event.keyCode === 13){
            this.props.onSubmit(this.inputElement.value);
            this.inputElement.value = '';
        }
    }
    render(){
        return (
            <header className="header">
                <h1>Todo</h1>
                <input type="text" 
                    ref = {node=>this.inputElement = node}
                    className="new-todo" 
                    onKeyUp={this.handleKeyUp} 
                    placeholder="" 
                />
            </header>
        );
    }
}

export default Header;