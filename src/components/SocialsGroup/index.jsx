import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './index.sass';

class Socials extends Component {
    state = {
        isActive: false,
        url: '',
        title: 'Patina',
        description: 'Литературный журнал',
        image: 'http://patina.ru'
    };

    static getDerivedStateFromProps(nextProps) {
        if (nextProps.match.url) {
            return {url: nextProps.match.url};
        }
    };

    saveBookmark = () => {
        this.setState(state => ({
            isActive: !state.isActive
        }))
    };

    render() {
        const { isActive, url, title, description, image } = this.state;


        return (
            <div className="socials" itemProp="sharedContent" itemScope itemType="http://schema.org/WebPage">
                <a target="_blank"
                   rel="noopener noreferrer"
                   href={`https://vk.com/share.php?url=${url}&title=${title}&description=${description}&image=${image}&noparse=true`}
                   itemProp="url"
                >
                    <div className="socials__vk" itemProp="headline" content="vk.com"/>
                </a>
                <a target="_blank"
                   rel="noopener noreferrer"
                   href={`https://t.me/share/url?url=${url}&title=${title}&description=${description}&image=${image}&noparse=true`}
                   itemProp="url"
                >
                    <div className="socials__tg" itemProp="headline" content="t.me"/>
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

export default withRouter(Socials);
