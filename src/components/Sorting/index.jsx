import React, {Component} from 'react';
import {sortParams} from 'config/config';
import './index.sass';

class Sorting extends Component {
    state = {active: ''};

    handleSort = active => {
        this.setState(state => ({
            active: state.active !== active ? active : ''
        }), () => {
            this.props.hook('sorting', this.state.active);
        });
    }

    render() {
        const {active} = this.state;

        return (
            <div className="sorting">
                <span className="sorting__title">
                    Cортировать по:
                </span>
                <div className="sorting__wrapper">
                    {sortParams.map(({title}, key) => (
                        <span
                            key={key}
                            className={`sorting__wrapper-type ${title === active && 'active' || ''}`}
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
