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

    componentWillMount() {
        fetch('/api/watch').then((response) => {
            if (response.status === 200) {
                return response.json();
            }
            console.log(`HTTP Error ${response.statusText}`);
            throw new Error(`HTTP Error ${response.statusText}`);
        }).then((watches) => this.setState({ watches }));
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