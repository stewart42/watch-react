import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Watch from './Watch';
import './Watches.css';

class Watches extends Component {
    render() {
        const watch = { id: 1, name: 'Swatch classic', price: 500.00, warranty: 1 };
        return (
            <div
                className="list"
            >
                <Watch
                    watch={watch}
                />
            </div>
        );
    }
}

Watches.propTypes = {

};

export default Watches;