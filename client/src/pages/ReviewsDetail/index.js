import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ArrowBackwards from 'components/ArrowBackwards';
import View_1 from './Views/View_1';
import View_2 from './Views/View_2';
import review from './review';

class ReviewPage extends Component {
    viewSwitcher = view => {
        switch (view) {
            case 'view_1':
                return View_1;
            case 'view_2':
                return View_2;
        }
    };

    render () {
        return(
            <>
                <Link to="/reviews">
                    <ArrowBackwards/>
                </Link>
                {review && review.map((item, key) => {
                    const Component = this.viewSwitcher(item.view);
                    return(
                        <Component
                            key={key}
                            {...item}
                        />
                    )
                })}
            </>
        )
    }
}

export default ReviewPage;
