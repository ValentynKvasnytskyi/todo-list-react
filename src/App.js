import React, {Component} from 'react';
import Todos from './components/Todos'
import Footer from './components/Footer'

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            activeItems: false,
            doneItems: false,
            allItems: true,
            tabIndex: 0,
            itemsLength: 0
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.done = this.done.bind(this);
        this.switchItems = this.switchItems.bind(this);
        this.clearCompleted = this.clearCompleted.bind(this);
    }

    componentDidMount() {
        if(localStorage.getItem('items')){
            this.setState({
                items: JSON.parse(localStorage.getItem('items')),
                itemsLength: JSON.parse(localStorage.getItem('items')).length
            })
        }
    }

    addItem(event){
        if(event.key === 'Enter' && this.refs.inp.value){
            this.setState(   {
                    items: [...this.state.items, {value: this.refs.inp.value, checked: false}]
                },
                () => {
                localStorage.setItem('items', JSON.stringify(this.state.items));
                this.setState({
                    itemsLength: this.state.items.length
                })
            });

            this.refs.inp.value = '';
        }
    }

    deleteItem(index) {
        this.setState({
            items: this.state.items.filter((e, i) => {
                return i !== index;
            })
        }, () => {
            localStorage.setItem('items', JSON.stringify(this.state.items));
            this.setState({
                itemsLength: this.state.items.length
            })
        });
    }

    done(item, index) {
        this.state.items.map((el, i) => {
            if(i === index) {
                el.checked = !el.checked;
                this.setState({
                    items: [...this.state.items]
                }, () => {
                    localStorage.setItem('items', JSON.stringify(this.state.items));
                });
            }
        });
    }

    switchItems(index) {
        this.setState({
            tabIndex: index
        }, () => {
            if(this.state.tabIndex === 0) {
                this.setState({ itemsLength: this.state.items.length })
            }
            if(this.state.tabIndex === 1) {
                this.setState({ itemsLength: this.state.items.filter((item) => !item.checked).length})
            }
            if(this.state.tabIndex === 2) {
                this.setState({ itemsLength: this.state.items.filter((item) => item.checked).length})
            }
        })
    }

    clearCompleted() {
        this.setState({
            items: this.state.items.filter((item) => !item.checked)
        }, () => {
            localStorage.setItem('items', JSON.stringify(this.state.items));
            this.setState({itemsLength: JSON.parse(localStorage.getItem('items')).length});
        });
    }

    render() {
        return (
            <div className="App">
                <h1>TodoList</h1>
                <input type="text" className="new-todo" placeholder="What do you need todo?" onKeyPress={this.addItem} ref="inp"/>
                <Todos deleteItem={this.deleteItem} done={this.done} {...this.state}/>
                {this.state.items.length ? <Footer clearCompleted={this.clearCompleted} switchItems={this.switchItems} {...this.state}/> : null}
            </div>
        );
    }
}

export default App;
