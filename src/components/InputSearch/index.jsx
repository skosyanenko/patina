import React, {Component} from 'react';
import './index.sass';

class InputSearch extends Component {
    state = {
        activeOption: 0,
        showOptions: false,
        value: '',
        options: [],
        loading: false,
        result: ''
    };

    search = async (val) => {

        const { fetchData } = this.props;

        return await fetchData(`/api/v1/search-title?q=${val}`)
            .then(() => this.setState({ options: this.props.items}))
            .catch(err => console.log(err));
    };

    onChange = async e => {
        this.search(e.target.value);

        this.setState({
            activeOption: 0,
            showOptions: true,
            value: e.currentTarget.value,
            loading: true
        }, () => {
            this.props.hook('loading', this.state.loading);
        })
    };

    onClick = e => {
        this.setState({
            activeOption: 0,
            showOptions: false,
            value: e.currentTarget.innerText,
            loading: false
        }, () => {
            this.search(this.state.value);
            this.props.hook('loading', this.state.loading);
        });
    };

    onKeyDown = e => {
        const {activeOption, options} = this.state;
        switch(e.keyCode) {
            case 13:
                if(options.length > 0) {
                    this.setState({
                        activeOption: 0,
                        showOptions: false,
                        value: options[activeOption].title,
                        loading: false,
                        result: 'результаты поиска:'
                    }, () => {
                        this.search(this.state.value);
                        this.props.hook('loading', this.state.loading);
                        this.props.hook('result', this.state.result);
                    });

                } else {
                    this.setState({
                        loading: false,
                        result: 'К сожалению, по вашему запросу ничего не найдено. Попробуйте еще.'
                    }, () => {
                        this.props.hook('loading', this.state.loading);
                        this.props.hook('result', this.state.result);
                    });;
                }

            case 38:
                if (activeOption === 0) {
                    return;
                }
                this.setState({ activeOption: activeOption - 1 });
            case 40:
                if (activeOption === options.length - 1) {
                    return;
                }
                this.setState({ activeOption: activeOption + 1 });
            default: return '';
        }
    };

    render() {
        const {classNamePrefix} = this.props;

        const {activeOption, options, showOptions, value} = this.state;

        let optionList;

        if (showOptions && value) {
            if (options && options.length) {
                optionList = (
                    <ul className="quest__options">
                        {options.map((optionName, key) => {
                            let className;
                            if (key === activeOption) {
                                className = 'active';
                            }
                            return (
                                <li className={`quest__options-item ${className}`}
                                    key={optionName}
                                    onClick={this.onClick}
                                >
                                    {optionName.title}
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
                       className={`quest__wrapper ${showOptions && options && options.length > 0 && value.length ? 'active' : ''}`}
                       onChange={e => this.onChange(e)}
                       onKeyDown={this.onKeyDown}
                       value={value}
                       placeholder={'Напишите название книги'}
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