import React, {Component} from 'react';
import Result from '../Result';
import Loader from '../../../components/Loader';

class ResultList extends Component {
    state = {
        loading: true,
        perPage: 9,
        valuesDropdown: [9, 18, 27]
    };

    componentDidMount() {
        this.props.updateState(this.state.perPage, this.state.valuesDropdown);
        // this.props.fetchData('/api/v1/books')
        //   .then(() => this.setState({loading: false}))
        //   .catch(err => console.log(err));
    }

    render() {
        const {loading} = this.state;

        if (loading) return <Loader/>;
        return (
            <>
                <div className="search__result">
                    <Result/>
                </div>

                {this.props.pagination || ''}
            </>
        );
    }
}

export default ResultList;