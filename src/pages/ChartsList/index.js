import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as VanillaTilt from 'vanilla-tilt';
import Typed from 'react-typed';
import paginationWrap from 'components/withPagination/paginationWrap';
import TitleOfPage from 'components/TitleOfPage';
import Loader from 'components/Loader';
import './index.sass';

class ChartsList extends Component {
    state = {
        loading: true,
        perPage: 10,
        valuesDropdown: [10, 20, 30]
    };

    componentDidMount(){
        VanillaTilt.init(this.rootNode, {
            max: 25,
            speed: 400,
            glare: true,
            reverse: true,
            'max-glare': 0.5
        });

        const { updateState } = this.props;
        const { perPage, valuesDropdown } = this.state;
        updateState({perPage, valuesDropdown});

        this.props.fetchData('/api/v1/charts')
          .then(() => this.setState({loading: false}))
          .catch(err => console.log(err));
    };

    render() {
        const { items } = this.props;
        const { loading } = this.state;

        if (loading) return <Loader/>;

        return(
            <>
                <TitleOfPage
                    title={"Топы"}
                    subtitle={"подборки книг на различные темы"}
                />
                <div className="container container--top-detail">
                    <div className="picture">
                        <div className="picture__quote"/>
                        <div className="picture__wrapper">
                            <div className="picture__image">
                                <div className="picture__image-background" ref={node => (this.rootNode = node)}/>
                                <div className="picture__image-border"/>
                            </div>
                            <div className="picture__citation">
                                <div className="picture__citation-wrap">
                                    <Typed className="wrapperQuote__container-text"
                                           strings = {["Чтение хороших книг — это разговор с самыми лучшими людьми прошедших времен, и притом такой разговор, когда они сообщают нам только лучшие свои мысли."]}
                                           typeSpeed = {50}
                                           backSpeed = {20}
                                           startDelay = {1500}
                                           showCursor = {false}
                                           backDelay = {3000}
                                           loop = {true}
                                    />
                                    <span className="picture__citation-author">Декарт</span>
                                    <div className="picture__quote"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container__container-top" itemScope itemType="http://schema.org/ItemList http://schema.org/CreativeWork">
                        <div className="selection"
                             itemProp="itemListElement"
                             itemScope
                             itemType="http://schema.org/ListItem"
                        >
                            { items && items.map((chart, key) => (
                                <Link to={`/charts/${chart.id}`}
                                      key={key}
                                      className="selection__link"
                                      itemProp="url"
                                      content={`patina.ru/charts/${chart.id}`}
                                >
                                    <span itemProp="position" content={key}>
                                        { chart.title }
                                    </span>
                                </Link>
                            ))}
                        </div>
                        {this.props.pagination || ''}
                    </div>
                </div>
            </>
        );
    }
}

export default paginationWrap(ChartsList);
