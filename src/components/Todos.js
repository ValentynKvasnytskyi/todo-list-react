import React, {Component} from 'react';


class Todos extends Component{

    render() {
        return <ul>
            {
                this.props.items.map((item, index) => {
                    if(this.props.tabIndex === 0) {
                        return <li key={index} className={item.checked ? "todo-item checked" : "todo-item"}>

                            <label className="todo-item__check">
                                <input type="checkbox" onChange={() => this.props.done(item, index)}/>
                            </label>

                            <span className="todo-item__text">{item.value}</span>

                            <button className="todo-item__del" onClick={() => this.props.deleteItem(index)}>+</button>
                        </li>;
                    } else if(this.props.tabIndex === 1 && !item.checked) {
                        return <li key={index} className={item.checked ? "todo-item checked" : "todo-item"}>

                            <label className="todo-item__check">
                                <input type="checkbox" onChange={() => this.props.done(item, index)}/>
                            </label>

                            <span className="todo-item__text">{item.value}</span>

                            <button className="todo-item__del" onClick={() => this.props.deleteItem(index)}>+</button>
                        </li>;
                    } else if(this.props.tabIndex === 2 && item.checked) {
                        return <li key={index} className={item.checked ? "todo-item checked" : "todo-item"}>

                            <label className="todo-item__check">
                                <input type="checkbox" onChange={() => this.props.done(item, index)}/>
                            </label>

                            <span className="todo-item__text">{item.value}</span>

                            <button className="todo-item__del" onClick={() => this.props.deleteItem(index)}>+</button>
                        </li>;
                    }
                })
            }
        </ul>
    }
}

export default Todos;