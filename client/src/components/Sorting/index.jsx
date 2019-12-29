import React, {Component} from 'react';
import './index.sass';

class Sorting extends Component {
    state = {
        isActiveSort: false
    };

    componentDidMount() {
        this.activeSortLink();
    }

    activeSortLink = () => {
        const sortingLinks = document.querySelectorAll('.sorting__type');
            sortingLinks.forEach(item => item.addEventListener('click', (e) => {
                e.preventDefault();
                item.classList.remove('active');
                this.classList.add('active');
        }))
    };

    render() {
        return (
            <div className="sorting">
                <div className="sorting__title">
                    Cортировать по:
                </div>
                <div className="sorting__container">
                    <div className="sorting__type">названию</div>
                    <div className="sorting__type">автору</div>
                    <div className="sorting__type">рейтингу</div>
                </div>
            </div>
        )
    }
}

Sorting.propTypes = {};

export default Sorting;
