import React from 'react'
import IndexTop from '../components/Index/IndexTop'
import IndexTitle from '../components/Index/IndexTitle'
import IndexBook from '../components/Index/IndexBook'
import IndexReview from '../components/Index/IndexReview'
import IndexNew from '../components/Index/IndexNew'
import Patina from '../components/Patina'
import Layout from '../components/Layouts/Layout'

const PatinaPage = () => (
    <Layout>
    <Patina/>

    <IndexTitle
        title={'Топы'}
        subtitle={'ПОДБОРКИ КНИГ НА РАЗЛИЧНЫЕ ТЕМЫ'}
    />
    <IndexTop />

    <IndexTitle
        title={'Книги'}
        subtitle={'КНИЖНАЯ ПОЛКА'}
    />
    <IndexBook/>

    <IndexTitle
        title={'Критика'}
        subtitle={'РЕЦЕНЗИИ НА КНИГИ РАЗЛИЧНЫХ АВТОРОВ И ЖАНРОВ'}
    />
    <IndexReview/>

    <IndexTitle
        title={'Что нового'}
        subtitle={'НОВОСТИ ИЗ МИРА ЛИТЕРАТУРЫ'}
    />
    <IndexNew/>

    <IndexTitle
        title={'Эвенты'}
        subtitle={'МЕРОПРИЯТИЯ В РОСТОВЕ-НА-ДОНУ'}
    />
    </Layout>
);

export default PatinaPage;
