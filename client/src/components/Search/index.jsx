import React, {Component} from 'react';
import './index.sass';
import PropTypes from 'prop-types';

class Search extends Component {



    render() {
        return (
            <div className="search">
                <input type="text" className="search__input"/>
                <div className="search__image"/>
            </div>
        );
    }
}

Search.propTypes = {};

export default Search;