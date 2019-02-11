import React, { Component } from 'react';

class PhoneInfo extends Component {

    static defaultProps = {
        info: {
            id: 0
            ,name: 'name'
            ,phone: '000-0000-0000'
        }
    }

    state = {
        editing: false
        ,name: ''
        ,phone: ''
    }

    constructor(props) {
        super(props);
        this._handleRemove = this._handleRemove.bind(this);
        this._handleToggle = this._handleToggle.bind(this);
        this._handleChange = this._handleChange.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (!this.state.editing && !nextState.editing && nextProps.info === this.props.info) {
            return false;
        }

        return true;
    }

    _handleRemove() {
        const {info, onRemove} = this.props;
        onRemove(info.id);
    }

    _handleToggle() {
        const { editing } = this.state;
        this.setState({
            editing: !editing
        });
    }

    _handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        const { info, onUpdate } = this.props;

        if (!prevState.editing && this.state.editing) {
            this.setState({
                name: info.name
                ,phone: info.phone
            });
        }

        if (prevState.editing && !this.state.editing) {
            onUpdate(info.id, {
                name: this.state.name
                ,phone: this.state.phone
            });
        }
    }

    render() {
console.log(' phoneInfo render ');
        const style = {
            border: '1px solid black'
            ,padding: '8px'
            ,margin: '8px'
        }

        const { editing } = this.state;

        if (editing) {
            return (
                <div style={style}>
                    <div>
                        <input
                            value={this.state.name}
                            name="name"
                            placeholder="name"
                            onChange={this._handleChange}
                        />
                    </div>
                    <div>
                        <input
                            value={this.state.phone}
                            name="phone"
                            placeholder="phone"
                            onChange={this._handleChange}
                        />
                    </div>
                    <button onClick={this._handleToggle}>update</button>
                    <button onClick={this._handleRemove}>delete</button>
                </div>
            );
        }

        const { id, name, phone } = this.props.info;

        return (
            <div style={style}>
                <div>
                    <b>{name}</b>
                </div>
                <div>
                    {phone}
                </div>
                <button onClick={this._handleToggle}>update</button>
                <button onClick={this._handleRemove}>delete</button>
            </div>
        );
    }
}

export default PhoneInfo;
