import React, { Component } from 'react';

class Rating extends  Component {
    state = {
        inactive: false,
        stars: [
            { postfix: 'one', count: 5 },
            { postfix: 'two', count: 4 },
            { postfix: 'three', count: 3 },
            { postfix: 'four', count: 2 },
            { postfix: 'five', count: 1 },
        ],
        mediumRate: 0,
        counters: 0,
        maskWidth: 0
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.ratingCount || nextProps.ratingTotal) {
            return {
                mediumRate: nextProps.ratingTotal,
                counters: nextProps.ratingCount
            }
        } else {
            return {
                mediumRate: prevState.mediumRate,
                counters: prevState. counters
            }
        }
    };

    clickVote = ({ target }) => {
        const { stars, counters, mediumRate } = this.state;
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

    render() {
        const { inactive, stars, mediumRate, counters, maskWidth } = this.state;

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
                <div className="rating__rate"
                     itemType="http://schema.org/AggregateRating"
                     itemProp="aggregateRating"
                     itemScope
                >
                    <span itemProp="ratingValue" content={mediumRate}>{mediumRate} </span>
                     /
                     <span itemProp="ratingCount" content={counters}> {counters}</span>
                </div>
            </div>
        )
    }
}

export default Rating;