import React, { Component } from 'react';
import './App.css';
import PhoneForm from './components/phoneForm'
import PhoneList from './components/phoneList'

class App extends Component {
    id = 2;
    state = {
        info: [
            {
                id: 0
                ,name: 'first'
                ,phone: 'p1'
            }
            ,{
                id: 1
                ,name: 'second'
                ,phone: 'p2'
            }
        ]
        ,keyword: ''
    }
    // end state

    constructor(props) {
        super(props);

        this._mainHandler = this._mainHandler.bind(this);
        this._removeHandler = this._removeHandler.bind(this);
        this._updateHandler = this._updateHandler.bind(this);
        this._changeHandler = this._changeHandler.bind(this);
    }

    _mainHandler(d) {
        const { info } = this.state;
        this.setState({
            info: info.concat({id: this.id, ...d})
        });
        this.id = this.id + 1;
    }

    _removeHandler(id) {
        const { info } = this.state;
        this.setState({
            info: info.filter( i => i.id !== id )
        });
    }

    _updateHandler(id, data) {
        const { info } = this.state;
        this.setState({
            info: info.map( i => {
                if (i.id === id) {
                    return {...i, ...data};
                }
                return i;
            })
        });
    }

    _changeHandler(e) {
        this.setState({
            keyword: e.target.value,
        });
    }

    render() {
        const { info, keyword } = this.state;

        const filterList = info.filter( i => {
            if (i.name.indexOf(keyword) !== -1) {
                return i;
            }
        });

        return (
            <div>
                <PhoneForm _mainHandler={this._mainHandler}/>
                <p><input placeholder="search" onChange={this._changeHandler} value={keyword} /></p>
                <PhoneList data={filterList} onRemove={this._removeHandler} onUpdate={this._updateHandler} />
            </div>
        );
    }
}

export default App;
