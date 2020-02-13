import React, {Component} from 'react';
import './index.sass';

class Socials extends Component {
    state = {
        isActive: false
    };

    saveBookmark = () => {
        this.setState(state => ({
            isActive: !state.isActive
        }))
    };

    render() {
        const {isActive} = this.state;
        return (
            <div className="socials">
                <a target="_blank"
                   // href={`https://vk.com/share.php?url=${url}&title=${title}&description=${description}&image=${image}`}
                >
                    <div className="socials__vk"/>
                </a>
                <a target="_blank"
                   // href={`https://t.me/share/url?url=${url}&text=${title}`}
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
