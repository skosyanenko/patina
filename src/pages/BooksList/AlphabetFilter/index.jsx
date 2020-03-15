import React, {Component} from 'react';
//import {alphabet} from '../../../config/config';
import './index.sass';

class AlphabetFilter extends Component {
    static initialState = {
        isBlur: false,
        activeLetter: '',
        alphabet: []
    };

    state = AlphabetFilter.initialState;

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.books !== this.props.books) {
            this.makeAlphabet();
        }
    }

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

    makeAlphabet = () => {
        const arrOfLetters = this.props.books.map(book => (
            book.title && book.title.substr(0, 1).toUpperCase()
        ));
        this.setState({
            alphabet: [...new Set(arrOfLetters)].sort()
        });
    };

    render() {
        const {isBlur, activeLetter, alphabet} = this.state;

        return (
            <div className={`alphabet ${isBlur ? 'alphabet--blur' : ''}`} onClick={this.resetFilter}>
                {alphabet && alphabet.map((item, key) => (
                    <div className="alphabet__letter" key={key} onClick={() => this.showLetter(item)}>
                        {item}
                    </div>
                ))}

                <div className={`alphabet__invisible ${isBlur ? 'alphabet__active' : ''}`}>
                    {activeLetter && activeLetter.length > 0 && isBlur ?
                        activeLetter : ''
                    }
                </div>
            </div>
        );
    }
}

export default AlphabetFilter;