import React, {Component} from 'react';
import './index.sass';

class Rating extends  Component {
    state = {
        isActive: false
    };

    clickRating = e => {
        this.setState(prevState => ({
            isActive: !prevState.isActive,
        }));

        const {target} = e;
        const parent = target.parent().parent().parent().parent();
        const commentCountElement = parent.find('.commentscount');
        const ratingValueElement = parent.find('.ratingvalue');
        const votedValue = parseInt(target.attr('data-score'));

        parent.addClass('voted');

        const commentCount = parseInt(commentCountElement.text());
        commentCountElement.text(commentCount + 1);

        const rating = parseFloat(ratingValueElement.text());
        rating = (commentCount * rating + votedValue)/(commentCount + 1);
        ratingValueElement.text(rating.toFixed(2));

    };

    render() {
        const {isActive} = this.state;
        return(
            // <div className="rating">
            //     {[1, 2 ,3, 4, 5].map((star, key) => (
            //         <>
            //             <input
            //                 key={key}
            //                 id={star}
            //                 type="radio"
            //                 name={star}
            //                 value={star}
            //             />
            //             <label htmlFor={star}/>
            //         </>
            //     ))}
            // </div>
            <div className="rating">
                <div className="rating__user">
                    <div className="rating__user-wrap">
                        {/*{[1, 2 ,3, 4, 5].map((star, key) => (*/}
                        {/*    <div className="votingHolder">*/}
                        {/*        <div key={key}*/}
                        {/*             data-score={star}*/}
                        {/*             className={`vote ${isActive ? 'active' : ''}`}*/}
                        {/*             onClick={() => this.clickRating()}*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*))}*/}
                        <div className="votingHolder">
                            <div data-score="5" className="vote onestar"/>
                            <div data-score="4" className="vote twostar"/>
                            <div data-score="3" className="vote threestar"/>
                            <div data-score="2" className="vote fourstar"/>
                            <div data-score="1" className="vote fivestar"/>
                        </div>
                    </div>
                </div>
                <div className="passiveRatingHolder">
                    <div className="ratingBg"/>
                    <div className="ratingMask"/>
                </div>
                <div className="text">Ваш голос учтен!</div>
                {/*<div className="rateNumbers">*/}
                {/*    <div itemprop="aggregateRating" itemscope="" itemtype="http://schema.org/AggregateRating">*/}
                {/*        <span itemprop="ratingValue" className="ratingvalue">4.25</span>*/}
                {/*        <span itemprop="bestRating" className="bestrating">5.00</span>*/}
                {/*        <div className="br"></div>*/}
                {/*        <span itemprop="reviewCount" className="commentscount">4</span>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default Rating;