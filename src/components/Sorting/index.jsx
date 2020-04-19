import React, { Component } from 'react';
import { sortParams } from 'config/config';
import './index.sass';

class Sorting extends Component {
    state = {
        sorting: '',
        result: '',
        value: ''
    };

    handleSort = sorting => {
        const { updateParentState } = this.props;
        const { result, value } = this.state;

        this.setState(state => ({
            sorting: state.sorting !== sorting ? sorting : ''
        }), () => {
            updateParentState({ sorting: this.state.sorting, result, value });
        });
    };

    render() {
        const { sorting } = this.state;

        return (
            <div className="sorting">
                <span className="sorting__title">
                    Cортировать по:
                </span>
                <div className="sorting__wrapper">
                    { sortParams.map(({title}, key) => (
                        <span
                            key={key}
                            className={`sorting__wrapper-type ${title === sorting ? 'active' : ''}`}
                            onClick={() => this.handleSort(title)}
                        >
                            {title}
                        </span>
                    ))}
                </div>
            </div>
        )
    }
}

export default Sorting;
