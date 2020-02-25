import React, {Component} from 'react';
import './index.sass';

class Socials extends Component {
    state = {
        isActive: false,
        url: 'patina',
        title: 'Patina',
        description: 'Литературный журнал',
        image: 'https://www.google.com/search?q=%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8&sxsrf=ALeKk03MkTrn7pKxrOXhK-g2hTZ5861Giw:1582660279780&tbm=isch&source=iu&ictx=1&fir=HFNJQtCtjzILjM%253A%252CN02-67896LnfIM%252C_&vet=1&usg=AI4_-kRaolV8OCtWultS9kgQ3zNDOC_pQw&sa=X&ved=2ahUKEwiCzpr-vO3nAhVJs4sKHV0VA_IQ9QEwAXoECAoQHg#imgrc=HFNJQtCtjzILjM'
    };

    saveBookmark = () => {
        this.setState(state => ({
            isActive: !state.isActive
        }))
    };

    render() {
        const {isActive, url, title, description, image} = this.state;
        return (
            <div className="socials">
                <a target="_blank"
                   href={`https://vk.com/share.php?url=${url}&title=${title}&description=${description}&image=${image}`}
                >
                    <div className="socials__vk"/>
                </a>
                <a target="_blank"
                   href={`https://t.me/share/url?url=${url}&title=${title}&description=${description}&image=${image}`}
                >
                    <div className="socials__tg"/>
                </a>
                <div className="socials__bookmark" onClick={this.saveBookmark}>
                    <svg className={`${isActive && 'active'}`}>
                        <use href="/images/icons/sprite.svg#bookmark"/>
                    </svg>
                </div>
            </div>
        );
    }
}

export default Socials;
