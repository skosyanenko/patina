import React, {Component} from 'react';
import './index.sass';

class Sorting extends Component {
    state = {
        params: [
            {value: 1, label: 'названию'},
            {value: 2, label: 'автору'},
            {value: 3, label: 'рейтингу'},
        ]
    };

    handleSort = value => {
        this.setState(state => ({
            params: state.params.map(x => {
                x.active = x.value === value;
                return x;
            })
        }));
    };

    render() {

        return (
            <div className="sorting">
                <span className="sorting__title">
                    Cортировать по:
                </span>
                <div className="sorting__wrapper">
                    {this.state.params.map((param, key) => (
                        <span
                            key={key}
                            className={`sorting__wrapper-type ${param.active && 'active'}`}
                            onClick={() => this.handleSort(param.value)}
                        >
                            {param.label}
                        </span>
                    ))}
                </div>
            </div>
        )
    }
}

export default Sorting;
