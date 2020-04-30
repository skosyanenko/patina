import React, { Component } from 'react';
import { filtersParams } from 'config/config';

class FiltersSearch extends Component {
    state = {
        filters: ''
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.filters !== this.props.filters) {
            this.setState({filters: this.props.filters});
        }
    };

    handleFilter = filters => {
        const { updateFilter } = this.props;

        this.setState(state => ({
            filters: state.filters !== filters ? filters : ''
        }), () => {
            updateFilter({ filters: this.state.filters });
        });
    };

    render() {
        const { filters } = this.state;

        return (
            <div className="filters">
                <span className="filters__title">
                    Поиск по:
                </span>
                <div className="filters__wrapper">
                    { filtersParams.map(({title, keys}, key) => (
                        <span
                            key={key}
                            className={`filters__wrapper-type ${keys === filters ? 'active' : ''}`}
                            onClick={() => this.handleFilter(keys)}
                        >
                            {title}
                        </span>
                    ))}
                </div>
            </div>
        );
    }
}

export default FiltersSearch;
