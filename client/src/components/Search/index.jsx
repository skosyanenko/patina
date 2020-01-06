import React, {Component} from 'react';
import './index.sass';

class Search extends Component {

    render() {
        const {classNamePrefix} = this.props;
        return (
            <div  className={`search ${classNamePrefix}`}>
                <input type="text" className="search__input"/>
                <div className="search__image"/>
            </div>
        );
    }
}

Search.propTypes = {};

export default Search;