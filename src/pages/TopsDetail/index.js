import React, {Component, Fragment} from 'react';
import axios from 'axios';
import Socials from 'components/SocialsGroup';
import Block from './Block';
import Depiction from './Depiction';
import CommentBlock from 'components/CommentBlock';
import data from 'startData/listTop';

class TopPage extends Component {
    state = {
        currentTop: []
    };

    fetchCurrentTop = async () => {
        return await axios.get(`/api/v1/tops`)
            .then(res => {
                if (res.data) {
                    return res.data;
                }
            })
            .catch(err => {
                console.log('Ошибка получения элементов из бд' + err)
            });
    };

    componentDidMount() {
        this.fetchCurrentTop().then(res => {
            this.setState({currentTop: res})
        });
    }

    render() {
        const {currentTop} = this.state;

        return(
            <Fragment>
                <Depiction currentTop={currentTop}/>
                <div className="container">
                    <div className="top-grid">
                        {data && data.items.map(item => (
                            <Block number={item.id}
                                title={item.title}
                                author={item.author}
                                description={item.text}
                            />
                        ))}
                    </div>
                </div>
                <div className="icons-wrap">
                    <div className="icons-wrap__socials">
                        <Socials/>
                    </div>
                </div>
                <CommentBlock/>
            </Fragment>
        );
    }
}

export default TopPage;
