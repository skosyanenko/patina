import React, {Component} from 'react';
import axios from 'axios';
import Pagination from '../Pagination';


const paginationWrap = function(WrappedComponent){
    return class extends Component {
        state = {
            books: [],
            filteredData: [],
            items: [],
            pageCount: 1,
            currentPage: 1,
            perPage: 9,
            offset: 0
        };

        fetchData = async (url, head) => {
            await axios.get(url).then(result => {
                this.setState(state => ({
                    data: result.data.data,
                    filterValues: result.data.filterValues,
                    filteredData: result.data.data,
                    pageCount: Math.ceil(result.data.data.length / state.perPage),
                    tableHead: head || state.tableHead
                }), () => {
                    this.setItemsForCurrentPage();
                });
            });
        };

        filterData = filteredData => {
            this.setState({
                filteredData,
                pageCount: Math.ceil(filteredData.length / this.state.perPage),
                offset: 0
            }, () => {
                this.setItemsForCurrentPage();
            });
        };

        setItemsForCurrentPage = () => {
            const {filteredData, offset, perPage} = this.state;
            let elements = filteredData.slice(offset, offset + perPage);
            this.setState({items: elements});
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
            const {filteredData, items, data, filterValues, pageCount, perPage} = this.state;
            return (
                <WrappedComponent
                    {...this.props}
                    refreshItems={this.setItemsForCurrentPage}
                    fetchData={this.fetchData}
                    filterData={this.filterData}
                    filterValues={filterValues}
                    filteredData={filteredData}
                    items={items}
                    data={data}
                    pagination={
                        <Pagination
                            pageCount={pageCount}
                            perPage={perPage}
                            handlePageClick={this.handlePageClick}
                            setPerPage={this.setPerPage}
                        />
                    }
                />
            );
        }
    };
};

export default paginationWrap;