import React, {Component} from 'react';
import axios from 'axios';
import Socials from 'components/SocialsGroup';
import Block from './Block';
import Depiction from './Depiction';
import CommentBlock from 'components/CommentBlock';

class TopPage extends Component {
    state = {
        currentTop: []
    };

    componentDidMount() {
        this.fetchCurrentTop();
    }

    fetchCurrentTop = async () => {
        const { id } = this.props.match.params;

        return await axios.get(`/api/v1/charts/${id}`)
            .then(res => {
                if (res.data) {
                    this.setState({currentTop: res.data})
                }
            })
            .catch(err => {
                console.log('Ошибка получения элементов из бд' + err)
            });
    };

    render() {
        const {currentTop} = this.state;

        return(
            <>
                <Depiction title={currentTop.title}
                           description={currentTop.description}
                />
                <div className="container">
                    <div className="top-grid">
                        {currentTop.books && currentTop.books.map((top, key) => (
                            <Block {...top} key={key} number={key}/>
                        ))}
                    </div>
                </div>
                <div className="icons-wrap">
                    <div className="icons-wrap__socials">
                        <Socials/>
                    </div>
                </div>
                <CommentBlock topId={currentTop.id}/>
            </>
        );
    }
}

export default TopPage;
