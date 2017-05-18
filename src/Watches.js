import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Watch from './Watch';
import './Watches.css';

class Watches extends Component {
    constructor(props) {
        super(props)
        this.state = {
            watches: [],
            filterName: '',
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

    onChange = (e) => {
        console.log(e.target.value);
        this.setState({filterName: e.target.value});
    }

    render() {
        const watches = this.state.watches.filter(watch => watch.name.toLowerCase().startsWith(this.state.filterName.toLowerCase()));
        const rows = watches.map((watch) => (
            <Watch
                key={watch.id}
                watch={watch}
            />
        ));
        return (
            <div>
                <div className="filter">
                    Filter by Name: <input onChange={this.onChange} />
                </div>
                <div
                    className="list"
                >
                    {rows}
                </div>
            </div>
        );
    }
}

Watches.propTypes = {

};

export default Watches;