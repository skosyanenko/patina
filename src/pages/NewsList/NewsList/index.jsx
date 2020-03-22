import React, {Component} from 'react';
import NewsVertical from '../View/NewsVertical';
import NewsHorizontal from '../View/NewsHorizontal';
import NewsBlock from '../View/NewsBlock';
import NewsElem from '../View/NewsElem';
import NewsLink from '../View/NewsLink';
import Loader from '../../../components/Loader';

class NewsList extends Component {
    state = {
        loading: true,
        perPage: 8,
        valuesDropdown: [8, 16, 24]
    };

    componentDidMount() {
        this.props.updateState(this.state.perPage, this.state.valuesDropdown);
        this.props.fetchData('/api/v1/news')
            .then(() => this.setState({loading: false}))
            .catch(err => console.log(err));
    }

    viewSwitcher = view => {
        switch (view) {
            case 0:
                return NewsVertical;
            case 1:
                return NewsHorizontal;
            case 2:
                return NewsBlock;
            case 3:
                return NewsElem;
            case 4:
                return NewsLink;
            default:
                return '';
        }
    };

    render () {
        const {loading} = this.state;
        const {items} = this.props;

        if (loading) return <Loader/>;

        return(
            <>
                <div className="news">
                    {items && items.map((item, key) => {
                        const Component = this.viewSwitcher(item.viewType);
                        const objValues = Object.keys(item.description).map(x => item.description[x]);
                        const textLength = Array.from(objValues)
                            .reduce((acc, item) => (acc + item.replace(/\s+/g, '').length), 0);
                        const datePublish = new Date(item.createdAt).toLocaleDateString();
                        return(
                            <Component
                                key={key}
                                {...item}
                                textLength={textLength}
                                date={datePublish}
                            />
                        )
                    })}
                </div>

                {this.props.pagination || ''}
            </>
        )
    }
}

export default NewsList;