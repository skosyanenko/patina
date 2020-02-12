import React, {Component} from 'react';
import Rating from 'components/Rating';
import InputSearch from 'components/InputSearch';
import './index.sass';

class Search extends Component {
    render() {
        return (
            <div className="search">
                <InputSearch
                    classNamePrefix="quest--searchResults"
                />
                <div className="search__title">результаты поиска:</div>
                <div className="search__result">

                    <div className="results">
                        <div className="results__img">
                            <img src="images/coverImage/11minutes.jpg" alt=""/>
                        </div>
                        <div className="results__wrapper">
                            <h1 className="results__wrapper-title">11 минут</h1>
                            <h3 className="results__wrapper-author">Пауло Коэльо</h3>
                            <Rating/>
                            <span className="results__wrapper-weight">146 стр.</span>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Search;