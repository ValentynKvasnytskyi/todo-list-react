import React, {Component} from 'react';

class Footer extends Component {

    render() {
        return <footer className="footer">
                <span className="todo-count">
                    <strong> { this.props.itemsLength } </strong>
                    {this.props.itemsLength === 1 ? "item " : "items "}
                </span>
                <ul className="filters">
                    <li>
                        <button className={this.props.tabIndex === 0 ?"all selected" : "all"} onClick={() => this.props.switchItems(0)}>All</button>
                    </li>
                    <li>
                        <button className={this.props.tabIndex === 1 ?"active selected" : "active"} onClick={() => this.props.switchItems(1)}>Active</button>
                    </li>
                    <li>
                        <button className={this.props.tabIndex === 2 ?"done selected" : "done"} onClick={() => this.props.switchItems(2)}>Completed</button>
                    </li>
                </ul>
                <button className="clear-completed" onClick={this.props.clearCompleted}>Clear completed</button>
            </footer>
    }
}

export default Footer;