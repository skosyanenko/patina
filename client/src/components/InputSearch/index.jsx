import React, { Component } from 'react';

class InputSearch extends Component {
    state = {
        value: '',
        activeOption: 0,
        showOptions: false
    };

    componentDidUpdate(prevProps) {
        if (prevProps.activeLetter !== this.props.activeLetter ||
            prevProps.sorting !== this.props.sorting) {
            this.setState({value: ''})
        }
    }

    toggleOptionsList = (value, showOptions) => {
        this.setState({
            value,
            showOptions,
            activeOption: 0
        }, () => {
            this.props.search(value);
        });
    }

    onChange = ({target: {value}}) => this.toggleOptionsList(value, true);

    onClick = value => this.toggleOptionsList(value, false);

    onKeyDown = ({keyCode}) => {
        const { activeOption } = this.state;
        const { options } = this.props;

        if (!options || !options.length) return;

        switch (keyCode) {
            case 13:
                this.toggleOptionsList(options[activeOption].title, false);
                break;
            case 38:
                if (activeOption === 0) return;
                this.setState(state => state.activeOption--);
                break;
            case 40:
                if (activeOption === options.length - 1) return;
                this.setState(state => state.activeOption++);
                break;
            default: return;
        }
    };

    render() {
        const { classNamePrefix, options } = this.props;
        const { activeOption, showOptions, value } = this.state;
        const isOptions = options && options.length;

        return(
            <div className={`quest ${classNamePrefix || ''}`}>
                <input type="text"
                       className={`quest__wrapper ${showOptions && isOptions && value.length ? 'active' : ''}`}
                       onChange={e => this.onChange(e)}
                       onKeyDown={this.onKeyDown}
                       value={value}
                       placeholder={'Напишите название книги'}
                />
                <div className="quest__image"/>
                {showOptions && value && isOptions &&
                    <div className="quest__autocomplete">
                        <ul className="quest__options">
                            {isOptions && options.map((optionName, key) => (
                                <li
                                    key={key}
                                    className={`quest__options-item ${key === activeOption && 'active' || ''}`}
                                    onClick={() => this.onClick(optionName.title)}
                                >
                                    {optionName.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                    || ''
                }
            </div>
        )
    }
}

export default InputSearch;