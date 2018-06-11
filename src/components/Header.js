import React,{Component} from 'react';

class Header extends Component{
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }
    handleKeyUp = (event) =>{
        if(event.keyCode === 13){
            this.props.onSubmit(this.inputRef.current.value);
            this.inputRef.current.value = '';
        }
    }
    
    render(){
        return (
            <header className="header">
                <h1>Todo</h1>
                <input type="text" 
                    ref = {this.inputRef}
                    className="new-todo" 
                    onKeyUp={this.handleKeyUp} 
                    placeholder="" 
                />
            </header>
        );
    }
}

export default Header;