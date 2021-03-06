import React, { Component } from 'react';
import axios from 'axios';
import Pagination from 'components/Pagination';

const paginationWrap = function( WrappedComponent, perPage, valuesDropdown ){
    return class PaginationWrap extends Component {
        state = {
            loading: true,
            data: [],
            filteredData: [],
            items: [],
            pageCount: 1,
            currentPage: 1,
            offset: 0,
            perPage: perPage,
            valuesDropdown: valuesDropdown
        };

        setData = result => {
            this.setState(state => ({
                loading: false,
                data: result.data,
                filteredData: result.data,
                pageCount: Math.ceil(result.data.length / state.perPage)
            }), () => {
                this.setItemsForCurrentPage();
            });
        }

        fetchData = async url => {
            return await axios.get(url).then(result => {
                this.setData(result);
                return result.data;
            });
        };

        filterData = filteredData => {
            this.setState({
                loading: false,
                filteredData,
                pageCount: Math.ceil(filteredData.length / this.state.perPage),
                offset: 0
            }, () => {
                this.setItemsForCurrentPage();
            });
        };

        handlePageClick = data => {
            const selectedPage = data.selected;
            const offset = selectedPage * this.state.perPage;
            this.setState({
                currentPage: selectedPage,
                offset: offset
            }, () => {
                this.setItemsForCurrentPage();
            });
        };

        setItemsForCurrentPage = () => {
            const {filteredData, offset, perPage} = this.state;
            let elements = filteredData.slice(offset, offset + perPage);
            this.setState({items: elements});
            window.scrollTo(0, 0);
        };

        setPerPage = value => {
            this.setState(state => ({
                perPage: value,
                pageCount: Math.ceil(state.filteredData.length / value)
            }), () => {
                this.setItemsForCurrentPage();
            });
        };

        render() {
            const { loading, filteredData, items, data, filterValues, pageCount, perPage, valuesDropdown } = this.state;

            return (
                <WrappedComponent
                    {...this.props}
                    refreshItems={this.setItemsForCurrentPage}
                    setData={this.setData}
                    fetchData={this.fetchData}
                    filterData={this.filterData}
                    filterValues={filterValues}
                    filteredData={filteredData}
                    items={items}
                    data={data}
                    loading={loading}
                    pagination={
                    <Pagination
                        pageCount={pageCount}
                        perPage={perPage}
                        handlePageClick={this.handlePageClick}
                        setPerPage={this.setPerPage}
                        valuesDropdown={valuesDropdown}
                    />
                }
                />
            );
        }
    };
};

export default paginationWrap;