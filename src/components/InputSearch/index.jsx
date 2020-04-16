import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './index.sass';

class InputSearch extends Component {
    state = {
        activeOption: 0,
        showOptions: false,
        value: '',
        options: [],
        loading: false,
        result: '',
        isBlur: false,
        activeLetter:  '',
        isValue: false
    };

    static getDerivedStateFromProps(nextProps) {
        if (nextProps.isActiveLetter || nextProps.isSorting) {
            return {
                value: ''
            }
        }
    };

    search = async val => {
        const { fetchData, items, data, filterData, location, match, hook } = this.props;
        const { options, activeLetter, isBlur, result } = this.state;

        if (match.path !== '/search/:id') {
            const regExp = new RegExp('(' + val + ')', 'iy');
            regExp.lastIndex = 0;
            let searchData = [];
            if (location !== '/reviews') {
                searchData = data.filter(item => regExp.exec(item.title));
            } else {
                searchData = data.filter(item => regExp.exec(item.book.title));
            }

            this.setState({
                options: searchData,
                result: 'результаты поиска:'
            });
            hook('activeLetter', activeLetter);
            hook('isBlur', isBlur);
            hook('result', result);

            return filterData(options.length ? searchData : data);
        }
    };

    onChange = async e => {
        this.search(e.target.value);

        const { hook, match, history } = this.props;
        const { loading } = this.state;

        this.setState({
            activeOption: 0,
            showOptions: true,
            value: e.currentTarget.value,
            loading: true
        }, () => {
            hook('loading', loading);
            if (match.path === '/search/:id') {
                history.push('/search');
            }
        })
    };

    onClick = e => {
        const { hook, history, match } = this.props;

        this.setState({
            activeOption: 0,
            showOptions: false,
            value: e.currentTarget.innerText,
            loading: false
        }, () => {
            this.search(this.state.value);
            hook('loading', this.state.loading);

            if (match.path === '/search/:id') {
                history.push('/search');
            }
        });
    };

    onKeyDown = e => {
        const { activeOption, options} = this.state;
        const { hook, filterData } = this.props;

        switch (e.keyCode) {
            case 13:
                if ( options.length > 0 ){
                    this.setState({
                        activeOption: 0,
                        showOptions: false,
                        value: options[activeOption].title,
                        loading: false,
                        result: 'результаты поиска:'
                    }, () => {
                        this.search(this.state.value);
                        hook('loading', this.state.loading);
                        hook('result', this.state.result);
                    });
                } else {
                    this.setState({
                        loading: false,
                        result: 'К сожалению, по вашему запросу ничего не найдено. Попробуйте еще.'
                    }, () => {
                        hook('loading', this.state.loading);
                        hook('result', this.state.result);
                        filterData([]);
                    });
                }
            break;
            case 38:
                if (activeOption === 0) {
                    return;
                }
                this.setState({ activeOption: activeOption - 1 });
            break;
            case 40:
                if (activeOption === options.length - 1) {
                    return;
                }
                this.setState({ activeOption: activeOption + 1 });
            break;
            default: return;
        }
    };

    render() {
        const { classNamePrefix } = this.props;

        const { activeOption, options, showOptions, value } = this.state;

        let optionList;

        if ( showOptions && value ){
            if ( options && options.length ) {
                optionList = (
                    <ul className="quest__options">
                        {options.map((optionName, key) => {
                            let className;
                            if ( key === activeOption ){ className = 'active' }
                            return (
                                <li className={`quest__options-item ${className}`}
                                    key={key}
                                    onClick={this.onClick}
                                >
                                    {optionName.title}
                                </li>
                            );
                        })}
                    </ul>
                );
            } else { optionList =  '' }
        }
        return(
            <div className={`quest ${classNamePrefix || ''}`}>
                <input type="text"
                       className={`quest__wrapper ${showOptions && options && options.length && value.length ? 'active' : ''}`}
                       onChange={e => this.onChange(e)}
                       onKeyDown={this.onKeyDown}
                       value={value}
                       placeholder={'Напишите название книги'}
                />
                <div className="quest__image"/>
                <div className="quest__autocomplete">
                    { optionList }
                </div>
            </div>
        )
    }
}

export default withRouter(InputSearch);