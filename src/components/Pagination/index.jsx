import React, {Component} from 'react';
import ReactPaginate from 'react-paginate';
import {Transition} from 'react-transition-group';
import PropTypes from 'prop-types';
import ArrowPagination from './ArrowPagination/index';
import './index.sass';

class Pagination extends Component {
    state = {
        pageDropdown: false,
        valuesDropdown: this.props.valuesDropdown
    };

    toggleDropdown = () => this.setState(state => ({pageDropdown: !state.pageDropdown}));

    render() {
        const {pageDropdown, valuesDropdown} = this.state;
        const {pageCount, handlePageClick, perPage, setPerPage} = this.props;

        return (
            <div className="pagination">
                <div className="pagination__counter">
                    Выводить по:
                    <span className="count" onClick={this.toggleDropdown}>
                        {perPage}
                    </span>
                    <Transition in={pageDropdown} timeout={50}>
                        {state => (
                            <div className={'pagination__dropdown ' + state}>
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
                <ReactPaginate
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination__wrapper'}
                    breakLabel={'...'}
                    breakClassName={'break'}
                    previousLabel={<ArrowPagination/>}
                    nextLabel={<ArrowPagination/>}
                    activeClassName={'active'}
                    activeLinkClassName={'active'}
                />
            </div>
        )
    }
}

Pagination.propTypes = {
    pageCount:       PropTypes.number.isRequired,
    perPage:         PropTypes.number.isRequired,
    handlePageClick: PropTypes.func.isRequired,
    setPerPage:      PropTypes.func.isRequired
};

export default Pagination;
