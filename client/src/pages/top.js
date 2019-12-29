import React from 'react'
import Layout from '../components/Layouts/Layout'
import Socials from '../components/Socials'
import TopBox from '../components/TopBox'
import '../static/sass/include/_buttons.sass'
import TopTitle from '../components/TopTitle';
import data from '../startData/listTop'


const TopPage = () => (
    <Layout>
        <TopTitle/>
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
        </div>
    </Layout>
);

export default TopPage;
