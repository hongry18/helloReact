import React, { Component } from 'react';
import PhoneInfo from './phoneInfo';

class PhoneList extends Component {
    static defaultProps = {
        list: []
        ,data: []
        ,onRemove: () => console.warn('onRemove not defined')
        ,onUpdate: () => console.warn('onUpdate not defined')
    }

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.data !== this.props.data;
    }

    render() {
        console.log('render phonelist');
        const { data, onRemove, onUpdate } = this.props;
        const list = data.map(i=> (
            <PhoneInfo
                key={i.id}
                info={i}
                onRemove={onRemove}
                onUpdate={onUpdate}
            />
        ))

        return (
            <div>{list}</div>
        );
    }
}

export default PhoneList;
