import React from 'react'
import {Link} from 'react-router-dom'
import Layout from '../components/Layouts/Layout'
import Socials from '../components/Socials'
import TopBox from '../components/TopBox'
import '../static/sass/include/_buttons.sass'
import data from '../startData/listTop'

const TopPage = () => (
    <Layout>
        <div className="top-title">ТОП 10</div>
        <div className="content">
            <div className="top-grid">
                {data && data.items.map(item =>(
                    <TopBox number={item.id}
                            title={item.title}
                            author={item.author}
                            text={item.text}
                    />
                ))}
            </div>
        </div>
        <div className="icons">
            <div className="icons__socials">
                <Socials/>
            </div>
            <Link to="/tops" className="button-green">Назад</Link>
        </div>
    </Layout>
);

export default TopPage;
