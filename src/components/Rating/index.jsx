import React, {Component} from 'react';
import './index.sass';
import axios from "axios";

class Rating extends  Component {
    state = {
        inactive: false,
        stars: [
            {
                postfix: 'one',
                count: 5
            },
            {
                postfix: 'two',
                count: 4
            },
            {
                postfix: 'three',
                count: 3
            },
            {
                postfix: 'four',
                count: 2
            },
            {
                postfix: 'five',
                count: 1
            },
        ],
        mediumRate: 0,
        counters: 0,
        maskWidth: 0
    };

    clickVote = ({target}) => {
        const {stars, counters, mediumRate} = this.state;
        const count = stars[target.id].count;
        const medium = (counters * mediumRate + count) / (counters + 1);

        this.setState(state => ({
            inactive: !state.inactive,
            counters: state.counters + 1,
            mediumRate: medium.toFixed(2),
            maskWidth: medium * 20
        }));

        target.classList.add('active');
    };

    fetchRating = async () => {
        return await axios.get('/api/v1/books')
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
        this.fetchRating().then(res => {
            this.setState({rating: res})
        });
    }

    render() {
        const {inactive, stars, mediumRate, counters, maskWidth} = this.state;

        return(
            <div className={`rating ${inactive ? 'voted' : ''}`}>
                <div className="rating-user">
                    <div className="rating-user__wrapper">
                        <div className="rating-user__voting">
                            {stars.map((item, key) => (
                                <div key={key}
                                     id={key}
                                     className={`rating-user__voting-vote rating-user__voting-${item.postfix} `}
                                     onClick={this.clickVote}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="rating__passive">
                    <div className="rating__passive-background"/>
                    <div className="rating__passive-mask" style={{width: maskWidth}}/>
                </div>
                <div className="rating__text">Ваш голос учтен!</div>
                <div className="rating__rate">{mediumRate} по {counters} оценке</div>
            </div>
        )
    }
}

export default Rating;