import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Loader from '../../../components/Loader';
import './index.sass';

class Selection extends Component {
    state = {
        loading: true,
        perPage: 10,
        valuesDropdown: [10, 20, 30]
    };

    componentDidMount() {
        this.props.updateState(this.state.perPage, this.state.valuesDropdown);
        this.props.fetchData('/api/v1/charts')
            .then(() => this.setState({loading: false}))
            .catch(err => console.log(err));
    }

    render() {
        const {items} = this.props;
        const {loading} = this.state;

        if (loading) return <Loader/>;

        return(
            <div className="container__container-top">
                <div className="selection">
                    {items && items.map((chart, key) => (
                        <Link to={`/charts/${chart.id}`} key={key} className="selection__link">
                            {chart.title}
                        </Link>
                    ))}
                </div>

                {this.props.pagination || ''}
            </div>
        );
    }
}

export default Selection;
