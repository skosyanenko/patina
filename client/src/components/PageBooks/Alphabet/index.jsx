import React, {Component} from 'react';
import './index.sass';
import {alphabet} from '../../../config/config';

class AlphabetFilter extends Component {
    static initialState = {
        isBlur: false,
        activeLetter: ''
    };

    state = AlphabetFilter.initialState;

    showLetter = letter => {
        this.setState(prevState => ({
            isBlur: !prevState.isBlur,
            activeLetter: !prevState.isBlur && letter || ''
        }), () => {
            this.props.hookLetter(this.state.activeLetter);
        });
    };

    resetFilter = () => {
        this.state.isBlur &&
        this.setState(AlphabetFilter.initialState,() => {
            this.props.hookLetter('')
        });
    };

    render() {
        const {isBlur, activeLetter} = this.state;
        return (
            <div className={`alphabet ${isBlur && 'alphabet--blur'}`} onClick={this.resetFilter}>
                {alphabet.map((item, key) => (
                    <div className="alphabet__letter" key={key} onClick={() => this.showLetter(item)}>
                        {item}
                    </div>
                ))}

                <div className={`alphabet__invisible ${isBlur && 'alphabet__active'}`}>
                    {activeLetter && activeLetter.length > 0 && isBlur ?
                        activeLetter : ''
                    }
                </div>
            </div>
        );
    }
}

export default AlphabetFilter;