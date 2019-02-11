import React, { Component } from 'react';

class PhoneForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
            ,phone: ''
        }

        this._handleChange = this._handleChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    _handleSubmit(e) {
        e.preventDefault();

        if (this.props.hasOwnProperty('_mainHandler')) {
            this.props._mainHandler(this.state);
        }

        this.setState({
            name: ''
            ,phone: ''
        });
    }

    render() {
        return(
            <form onSubmit={this._handleSubmit}>
                <input
                    placeholder="name"
                    value={this.state.name}
                    onChange={this._handleChange}
                    name="name"
                />
                <input
                    placeholder="phone"
                    value={this.state.phone}
                    onChange={this._handleChange}
                    name="phone"
                />
                <button type="submit">send</button>
            </form>
        );
    }
}

export default PhoneForm;
