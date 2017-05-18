import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Watch from './Watch';
import './Watches.css';

class Watches extends Component {
    constructor(props) {
        super(props)
        this.state = {
            watches: [
                { id: 1, name: 'Swatch classic', price: 500.00, warranty: 1 },
                { id: 2, name: 'Swatch classic', price: 500.00, warranty: 1 },
            ],
        };
    }

    render() {
        const watches = this.state.watches;
        const rows = watches.map((watch) => (
            <Watch
                key={watch.id}
                watch={watch}
            />
        ));
        return (
            <div
                className="list"
            >
                {rows}
            </div>
        );
    }
}

Watches.propTypes = {

};

export default Watches;