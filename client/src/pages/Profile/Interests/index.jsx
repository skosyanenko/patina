import React, {Component} from 'react';
import Container from './Container';
import './index.sass';

class Interests extends Component {
    state = {
        userLikes: [
            {title: 'Любимые книги', icon: 'books', text: ['Мастер и Маргарита', 'Три товарища', 'Повелитель мух']},
            {title: 'Любимые жанры', icon: 'wishlist', text: ['Мастер и Маргарита', 'Три товарища', 'Повелитель мух']},
            {title: 'Любимые авторы', icon: 'author', text: ['Мастер и Маргарита', 'Три товарища', 'Повелитель мух']}
        ]
    };

    render() {
        const {userLikes} = this.state;

        return (
            <div className="interests">
                {userLikes.map((item, key) => (
                    <Container
                        key={key}
                        icon={item.icon}
                        title={item.title}
                        text={item.text}
                    />
                ))}
            </div>
        );
    }
}

export default Interests;