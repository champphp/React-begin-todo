import React , {Component} from 'react';

class Footer extends Component {
    onNewStatus = (status) =>{
        this.props.onStatus(status);
    }
    render(){
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{this.props.count()}</strong> <spen>item left</spen>
                </span>
                <ul className="filters">
                    <li>
                        <a className={(this.props.status === 'All') ? "selected":""} 
                            onClick={() => this.onNewStatus('All')}
                            >
                                All
                        </a>
                    </li>
                    <li>
                        <a className={(this.props.status === 'Active') ? "selected":""} 
                            onClick={() => this.onNewStatus('Active')} >
                                Active
                        </a>
                    </li>
                    <li>
                        <a className={(this.props.status === 'Completed') ? "selected":""} 
                            onClick={() => this.onNewStatus('Completed')} >
                                Completed
                        </a>
                    </li>
                </ul>
            </footer>
        )
    }
}
export default Footer;