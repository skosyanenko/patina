import React, {Component, Fragment} from 'react';
import Link from 'next/link';
import * as VanillaTilt from 'vanilla-tilt';
import Typed from 'react-typed';
import paginationWrap from 'components/withPagination/paginationWrap';
import TitleOfPage from 'components/TitleOfPage';
import Loader from 'components/Loader';
import MyHead from 'components/MyHead';
import axios from 'axios';

class ChartsList extends Component {
    componentDidMount(){
        VanillaTilt.init(this.rootNode, {
            max: 25,
            speed: 400,
            glare: true,
            reverse: true,
            'max-glare': 0.5
        });

        const { setData, charts } = this.props;
        setData({ data: charts });
    };

    render() {
        const { items, loading } = this.props;

        return(
            <>
                <MyHead
                    title={'Топы - Patina'}
                    description={'На Patina вы найдете рейтинги лучших книг, отзывы, рецензии, рекомендации, популярные авторы и многое другое – заходи!'}
                    link={'/charts'}
                    robots={'all'}
                />
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
                    {!loading
                        ?
                        <div className="container__container-top" itemScope itemType="http://schema.org/ItemList http://schema.org/CreativeWork">
                            <div className="selection"
                                 itemProp="itemListElement"
                                 itemScope
                                 itemType="http://schema.org/ListItem"
                            >
                                { items && items.map((chart, key) => (
                                    <Fragment key={key}>
                                        <Link href={'/charts/[id]'} as={`/charts/${chart.id}`}>
                                            <a className="selection__link"
                                               itemProp="url"
                                               content={`patina.ru/charts/${chart.id}`}
                                            >
                                             <span itemProp="position" content={key}>
                                            { chart.title }
                                        </span>
                                            </a>
                                        </Link>
                                    </Fragment>
                                ))}
                            </div>
                            {this.props.pagination || ''}
                        </div>
                        :
                        <Loader/>
                    }
                </div>
            </>
            </>
        );
    }
}

export async function getStaticProps() {
    const { API_URL } = process.env;

    const resCharts = await axios.get(`${API_URL}/charts`)
    const charts = await resCharts.data &&
        resCharts.data.map(item => (
            {
                id: item.id,
                title: item.title
            }))

    return { props: {charts} }
}

export default paginationWrap(ChartsList, 10, [10, 20, 30]);
