import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './index.sass';

class Selection extends Component {
    state = {
        loading: true
    };

    componentDidMount() {
        this.props.fetchData('/api/v1/tops')
          .then(() => this.setState({loading: false}))
          .catch(err => console.log(err));
    }

    render() {
        const {items} = this.props;
        const {loading} = this.state;

        if (loading) return 'Loading...';

        return(
            <>
                <div className="selection">
                    {items && items.map((top, key) => (
                        <Link to={`/tops/${top.id}`} key={key} className="selection__link">
                            {top.title}
                        </Link>
                    ))}
                </div>
                {this.props.pagination || ''}
            </>
        );
    }
}

export default Selection;
