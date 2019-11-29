import React, { Component } from 'react';
import Task from './Component/Task'
import nanoid from 'nanoid'

class App extends Component {
    state = {
        totalPrice: 0,
        text: '',
        price: 0,
        bank: [],
    };
    add = () =>{
        const Order = {
            name: this.state.text,
            price: this.state.price,
            id: nanoid(),
        };
        const totalPrice = this.state.totalPrice += this.state.price;
        this.setState({bank: [...this.state.bank, Order], totalPrice, text: '', price: 0});
    };
    texts = event =>{this.setState({text: event.target.value})};
    prices = event => {this.setState({price: parseInt(event.target.value)});};
    remove = id => {
        const BankId = this.state.bank.findIndex(t => t.id === id);
        const bank = [...this.state.bank];
        let totalPrice = this.state.totalPrice - bank[BankId].price;
        bank.splice(BankId, 1);
        this.setState({bank: bank, totalPrice: totalPrice});
    };
    render() {
        let render = this.state.bank.map(bank => {
            return(
                <Task
            name={bank.name}
            price={bank.price}
            remove={() => this.remove(bank.id)}

            />
        )});
        return (
            <div className="App">
            <div>
            <div>
            <input type="text" placeholder="Enter name of item" onChange={this.texts} id="text"/>
            <span><input type='number' placeholder="Enter price" onChange={this.prices} id="price"/>KGS</span>
            <button onClick={this.add}>Добавить</button>
            </div>
            </div>
            <div>
            Total Price: {this.state.totalPrice} KGS
            {render}
            </div>
            </div>
    );
    }
}

export default App;
