import React, {Component} from 'react';
import ReactPaginate from 'react-paginate';
import {Transition} from 'react-transition-group';
import PropTypes from 'prop-types';
import ArrowPagination from "./ArrowPagination/index";
import './index.sass';

class Pagination extends Component {
    state = {
        pageDropdown: false,
        valuesDropdown: [9, 18, 27]
    };

    toggleDropdown = () => this.setState(state => ({pageDropdown: !state.pageDropdown}));

    render() {
        const {pageDropdown, valuesDropdown} = this.state;
        const {classNamePrefix, pageCount, handlePageClick, perPage, setPerPage} = this.props;

        return (
            <div className={`container ${classNamePrefix}`}>
                <ReactPaginate
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    containerClassName={'container__pagination'}
                    breakLabel={'...'}
                    breakClassName={'break'}
                    previousLabel={<ArrowPagination/>}
                    nextLabel={<ArrowPagination/>}
                    activeClassName={'active'}
                />
                <div className="container__counter">
                    Выводить по:
                    <span className="count" onClick={this.toggleDropdown}>
                        {perPage}
                    </span>
                    <Transition in={pageDropdown} timeout={50}>
                        {state => (
                            <div className={'container__dropdown ' + state}>
                                {valuesDropdown.map(item => (
                                    <span
                                        className="count" key={item}
                                        onClick={() => {
                                            setPerPage(item);
                                            this.toggleDropdown();
                                        }}
                                    >
                                        {item}
                                    </span>
                                ))}
                          </div>
                        )}
                    </Transition>
                </div>
            </div>
        )
    }
}

Pagination.propTypes = {
    pageCount: PropTypes.number.isRequired,
    perPage: PropTypes.number.isRequired,
    handlePageClick: PropTypes.func.isRequired,
    setPerPage: PropTypes.func.isRequired
};


export default Pagination;
