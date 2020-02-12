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
                    <svg viewBox="0 0 65.716 37.495" className="socials__vk">
                        <use href="/images/icons/socialsGroup/vk.svg#vk"/>
                    </svg>
                </a>
                <a target="_blank"
                   // href={`https://t.me/share/url?url=${url}&text=${title}`}
                >
                    <svg viewBox="0 0 63.918 54.832" className="socials__tg">
                        <use href="/images/icons/socialsGroup/telegram.svg#telegram"/>
                    </svg>
                </a>
                <div className="socials__bookmark" onClick={this.saveBookmark}>
                    <svg viewBox="-120 0 511 511.99905" className={`${isActive && 'active'}`}>
                        <use href="/images/icons/socialsGroup/bookmark.svg#bookmark"/>
                    </svg>
                </div>
            </div>
        );
    }
}

export default Socials;
