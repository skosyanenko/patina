import React, {Component} from 'react';
import axios from 'axios';
import './index.sass';
//const options = ['Мастер и Маргарита','Мыло', 'Мло', 'Яблоко', 'Стол', 'Солнце', 'Кус'];

class InputSearch extends Component {
    state = {
        activeOption: 0,
        filteredOptions: [],
        showOptions: false,
        value: '',
        options: null,
        loading: false
    };

    search = async (val) => {
        console.log(val)
        // this.setState({ loading: true });
        // const res = await axios(`/api/v1/search-title?q=${val}`);
        // const options = await res.data;

        //this.setState({ options, loading: false });
        return await axios.get(`/api/v1/search-title?q=${val}`)
            .then(res => {
                if (res.data) {
                    this.setState({options: res.data, loading: false})
                }
            })
            .catch(err => {
                console.log('Ошибка получения элементов из бд' + err)
            });
    };

    onChange = async e => {
        const value = e.currentTarget.value;
        this.search(e.target.value);

        // const filteredOptions = this.state.options.filter(
        //     (optionName) =>
        //         optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        // );
        //
        // if (this.state.filteredOptions) {
        //     this.setState(prevState =>({
        //         showOptions: !prevState.showOptions
        //     }))
        // }

        this.setState({
            activeOption: 0,
            //filteredOptions,
            showOptions: true,
            value: e.currentTarget.value
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

    render() {
        const {classNamePrefix} = this.props;

        const {activeOption, filteredOptions, showOptions, value} = this.state;

        let optionList;

        if (showOptions && value) {
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
            <div className={`quest ${classNamePrefix || ''}`}>
                <input type="text"
                       className={`quest__wrapper ${showOptions && filteredOptions.length > 0 && value.length ? 'active' : ''}`}
                       onChange={e => this.onChange(e)}
                       onKeyDown={this.onKeyDown}
                       value={value}
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