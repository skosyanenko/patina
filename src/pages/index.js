import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout';

const IndexPage = () => (
    <Layout>
        <h1>Я Главная страница </h1>
        <Link to={'/books'} >на страницу книги</Link>
    </Layout>
);

export default IndexPage
