import React from 'react';
import Tops from 'components/ComponentsIndex/Tops';
import Title from 'components/ComponentsIndex/Title';
import Books from 'components/ComponentsIndex/Books';
import News from 'components/ComponentsIndex/News';
import MainTimeline from 'components/ComponentsIndex/TimeLine';
import MyHead from 'components/MyHead';
import axios from 'axios';

const PatinaPage =({ books, charts, articlesView_2, articlesView_3, articlesView_4, toggleModal }) => (
    <>
        <MyHead
            title={'Patina — литературный журнал. Новинки книг, подборки, рецензии'}
            description={'Литературный журнал «Patina». Здесь можно найти новости книжного мира, новинки книг, получить интересную подборку, найти книгу для себя, опубликовать рецензию на книгу'}
            link={'/'}
            robots={'all'}
        />
        <>
            <div className="patina">
                <svg className="patina__logo" viewBox="0 0 921.26 907.09">
                    <g id="letters">
                        <path className="letters" d="M6.19,679.34V388.09c31.94,0,63.88,0,95.81,0c3.9-0.45,14.01-1.08,24.38,4.75c5.95,3.35,9.8,7.6,12,10.5
                            c0,36.13,0,72.25,0,108.38c-0.51,1.98-1.59,5.08-4.08,8.02c-3.05,3.59-6.58,5.03-10.97,6.75c-3.48,1.36-8.81,3.04-15.7,3.61
                            c-20.88,0-41.75,0-62.63,0c0-1.75,0-3.5,0-5.25c12.75,0,25.5,0,38.25,0c1.3-0.05,7.6-0.45,12.39-5.64
                            c3.51-3.81,4.28-8.11,4.49-9.74c0-32.13,0-64.25,0-96.38c0.16-3.07-0.22-7.04-2.39-10.79c-7.21-12.48-36.15-13.02-52.74-9.83
                            c0,95.63,0,191.25,0,286.88H6.19z"/>
                        <path className="letters" d="M175,679.09l0.28-274.25c1.89-2.81,5.09-6.78,10.1-10.19c8.72-5.93,17.6-6.53,21.42-6.56c23.93,0,47.86,0,71.79,0
                            c3.18-0.04,11.13,0.3,19.14,5.51c6.32,4.1,9.71,9.31,11.26,12.09c0,91.14,0,182.27,0,273.41h-39.41c0.1-49.67,0.2-99.33,0.31-149
                            c-18.44,0-36.88,0-55.32,0c0-1.56,0-3.13,0-4.69c18.44,0,36.88,0,55.32,0c0.12-40.74,0.25-81.48,0.37-122.22
                            c-0.11-1.23-0.49-3.58-2.07-5.99c-2.2-3.35-5.31-4.68-6.45-5.11c-12.34-0.2-24.68-0.39-37.02-0.59c-0.74,0.05-5.29,0.44-8.34,4.37
                            c-2.28,2.94-2.37,6.13-2.35,7.14c0.22,92.03,0.44,184.05,0.66,276.08H175z"/>
                        <path className="letters" d="M411.38,679.34v-288h-65.63v-3.33l160.13,0.08v4c-18.75,0.1-37.5,0.2-56.25,0.31c0.31,95.74,0.62,191.48,0.94,287.23
                            C437.5,679.52,424.44,679.43,411.38,679.34z"/>
                        <path className="letters" d="M618.38,679.62V388.09H657l85.88,272.13V388.01l9,0.08v291.53c-14.38-0.09-28.75-0.19-43.13-0.28
                            c-27.5-88.5-55-177-82.5-265.5c0,88.59,0,177.19,0,265.78H618.38z"/>
                        <path className="letters" d="M786.78,679.31l0.28-274.25c1.89-2.81,5.09-6.78,10.1-10.19c8.72-5.93,17.6-6.53,21.42-6.56c23.93,0,47.86,0,71.79,0
                            c3.18-0.04,11.13,0.3,19.14,5.51c6.32,4.1,9.71,9.31,11.26,12.09c0,91.14,0,182.27,0,273.41h-39.41c0.1-49.67,0.2-99.33,0.31-149
                            c-18.44,0-36.88,0-55.32,0c0-1.56,0-3.13,0-4.69c18.44,0,36.88,0,55.32,0c0.12-40.74,0.25-81.48,0.37-122.22
                            c-0.11-1.23-0.49-3.58-2.07-5.99c-2.2-3.35-5.31-4.68-6.45-5.11c-12.34-0.2-24.68-0.39-37.02-0.59c-0.74,0.05-5.29,0.44-8.34,4.37
                            c-2.28,2.94-2.37,6.13-2.35,7.14c0.22,92.03,0.44,184.05,0.66,276.08H786.78z"/>
                    </g>
                    <g id="lines" className="lines">
                        <line strokeWidth="15px" x1="456.63" x2="456.63" y1="0" y2="123.21" className="logo-lines"/>
                        <line strokeWidth="15px" x1="484.38" x2="484.38" y1="0" y2="85.84" className="logo-lines"/>
                        <line strokeWidth="15px" x1="511.75" x2="511.75" y1="0" y2="45.96" className="logo-lines"/>
                        <line strokeWidth="15px" x1="511.75" x2="511.75" y1="76.25" y2="123.21" className="logo-lines"/>
                        <line strokeWidth="15px" x1="539.5" x2="539.5" y1="0" y2="78.08" className="logo-lines"/>
                        <line strokeWidth="15px" x1="539.5" x2="539.5" y1="107.37" y2="390" className="logo-lines"/>
                        <line strokeWidth="15px" x1="569" x2="569" y1="0" y2="10.83" className="logo-lines"/>
                        <line strokeWidth="15px" x1="569" x2="569" y1="40.12" y2="390" className="logo-lines"/>
                        <line strokeWidth="45px" x1="554.5" x2="554.5" y1="388.09" y2="1000" className="logo-lines"/>
                    </g>
                </svg>
            </div>
            <Title title={'Книги'} subtitle={'книжная полка'}/>
            <Books
                books={books}
                toggleModal={toggleModal}
            />
            <Title title={'Что нового'} subtitle={'новости из мира литературы'}/>
            <News
                articles_2={articlesView_2}
                articles_3={articlesView_3}
                articles_4={articlesView_4}
                toggleModal={toggleModal}
            />
            <Title title={'Топы'} subtitle={'подборки книг на различные темы'}/>
            <Tops charts={charts}/>
            <MainTimeline/>
        </>
    </>
);

export async function getStaticProps() {
    const { API_URL } = process.env;

    const books = await axios.get(`${API_URL}/books?_limit=10`)
        .then(res => res.data);

    const charts = await axios.get(`${API_URL}/charts?_limit=10`)
        .then(res => res.data);

    const articlesView_2 = await axios.get(`${API_URL}/articles?viewType_in=2&_limit=1`)
        .then(res => res.data);
    const articlesView_3 = await axios.get(`${API_URL}/articles?viewType_in=3&_limit=2`)
        .then(res => res.data);
    const articlesView_4 = await axios.get(`${API_URL}/articles?viewType_in=4&_limit=4`)
        .then(res => res.data);

    return {
        props: {
            books,
            charts,
            articlesView_2,
            articlesView_3,
            articlesView_4
        }
    }
}

export default PatinaPage;
