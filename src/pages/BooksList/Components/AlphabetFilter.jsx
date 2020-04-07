import React, { Component } from 'react';

class AlphabetFilter extends Component {
    state = AlphabetFilter.initialState;
    
    static initialState = {
        isBlur: false,
        activeLetter: '',
        alphabet: []
    };

    static getDerivedStateFromProps(nextProps) {
        if (nextProps.letters.length > 0) {
            return {alphabet: nextProps.letters};
        } else {
            return {alphabet: []};
        }
    }
    
    showLetter = letter => {
        this.setState(prevState => ({
            isBlur: !prevState.isBlur,
            activeLetter: !prevState.isBlur ? letter : ''
        }), () => {
            this.props.hook('letter', this.state.activeLetter);
        });
    };

    resetFilter = () => {
        this.state.isBlur &&
        this.setState(AlphabetFilter.initialState, () => {
            this.props.hook('letter', '');
        });
    };

    render() {
        const { isBlur, activeLetter, alphabet } = this.state;

        return (
            <div className={`alphabet ${isBlur ? 'alphabet--blur' : ''}`} onClick={this.resetFilter}>
                { alphabet && alphabet.map((item, key) => (
                    <div className="alphabet__letter" key={key} onClick={() => this.showLetter(item)}>
                        {item}
                    </div>
                ))}

                <div className={`alphabet__invisible ${isBlur ? 'alphabet__active' : ''}`}>
                    { activeLetter && activeLetter.length > 0 && isBlur ?
                        activeLetter : ''
                    }
                </div>
            </div>
        );
    }
}

export default AlphabetFilter;