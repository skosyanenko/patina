import React, {Component} from 'react';
import axios from 'axios';
import './index.sass';
const options = ['Мастер и Маргарита','Мыло', 'Мло', 'Яблоко', 'Стол', 'Солнце', 'Кус'];

class InputSearch extends Component {
    state = {
        activeOption: 0,
        filteredOptions: [],
        showOptions: false,
        userInput: '',
        books: []
    };

    onChange = e => {
        const userInput = e.currentTarget.value;

        const filteredOptions = options.filter(
            (optionName) =>
                optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        if (this.state.filteredOptions) {
            this.setState(prevState =>({
                showOptions: !prevState.showOptions
            }))
        }

        this.setState({
            activeOption: 0,
            filteredOptions,
            showOptions: true,
            userInput: e.currentTarget.value
        });
    };

    onClick = e => {
        this.setState({
            activeOption: 0,
            filteredOptions: [],
            showOptions: false,
            userInput: e.currentTarget.innerText
        });
    };

    onKeyDown = e => {
        const {activeOption, filteredOptions} = this.state;
        switch(e.keyCode) {
            case 13:
                this.setState({
                    activeOption: 0,
                    showOptions: false,
                    userInput: filteredOptions[activeOption]
                });
            case 38:
                if (activeOption === 0) {
                    return;
                }
                this.setState({ activeOption: activeOption - 1 });
            case 40:
                if (activeOption === filteredOptions.length - 1) {
                    return;
                }
                this.setState({ activeOption: activeOption + 1 });
            default: return '';
        }
    };

    fetchBooks = async () => {
        return await axios.get('/api/v1/books')
            .then(res => {
                if (res.data) {
                    return res.data;
                }
            })
            .catch(err => {
                console.log('Ошибка получения элементов из бд' + err)
            });
    };

    componentDidMount() {
        this.fetchBooks().then(res => {
            this.setState({books: res})
        });
    }

    render() {
        const {classNamePrefix} = this.props;

        const {activeOption, filteredOptions, showOptions, userInput} = this.state;

        let optionList;

        if (showOptions && userInput) {
            if (filteredOptions.length) {
                optionList = (
                    <ul className="quest__options">
                        {filteredOptions.map((optionName, index) => {
                            let className;
                            if (index === activeOption) {
                                className = 'active';
                            }
                            return (
                                <li className={`quest__options-item ${className}`}
                                    key={optionName}
                                    onClick={this.onClick}
                                >
                                    {optionName}
                                </li>
                            );
                        })}
                    </ul>
                );
            } else {
                 optionList =  '';
            }
        }
        return(
            <div  className={`quest ${classNamePrefix}`}>
                <input type="text"
                       className={`quest__wrapper ${showOptions && filteredOptions.length > 0 && userInput.length ? 'active' : ''}`}
                       onChange={this.onChange}
                       onKeyDown={this.onKeyDown}
                       value={userInput}
                />
                <div className="quest__image"/>
                <div className="quest__autocomplete">
                    {optionList}
                </div>
            </div>
        )
    }
}

export default InputSearch;