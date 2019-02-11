import React, { Component } from 'react';

const Problematic = () => {
    throw(new Error('Bug!'));
    return (
        <div>
        </div>
    );
}

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }

        // handler binding
        this._increment2 = this._increment2.bind(this);
        this._decrement2 = this._decrement2.bind(this);
    }
    // end constructor

    shouldComponentUpdate(nextProps, nextState) {
        // return false 하면 업데이트를 안함
        // return this.props.checked !== nextProps.checked
        // return true;
        if (this.state.error && this.state.number === nextState.number) {
            return false;
        }
        return true;
    }

    componentDidCatch(error, info) {
        this.setState({error: true});
    }

    // handler arrow function
    _increment = () => {
        this.setState({number: this.state.number + 1});
    }

    _decrement = () => {
        this.setState({number: this.state.number - 1});
    }

    // handler default method
    _increment2() {
        this.setState({number: this.state.number + 1});
    }

    _decrement2() {
        this.setState({number: this.state.number - 1});
    }

    render() {

        if (this.state.error) {
            return (<h1>에러발생</h1>);
        }

        return (
            <div>
                <h1>Counter</h1>
                <div>value: {this.state.number}</div>
                { this.state.number === 4 && <Problematic /> }
                <button onClick={this._increment}>+ 1</button>
                <button onClick={this._increment2}>+ 2</button>
                <button onClick={this._decrement}>- 1</button>
                <button onClick={this._decrement2}>- 2</button>
            </div>
        )
    }
    // end render
}

export default Counter;
