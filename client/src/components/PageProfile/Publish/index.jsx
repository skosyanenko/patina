import React, {Component} from 'react';
import AuthorOfPublish from '../AuthorOfPublish';
import Icons from '../../Icons';
import './index.sass';

class Publish extends Component {
    render() {
        return (
            <div className="published">
                <AuthorOfPublish
                    isTimeToRead={true}
                    isButton={false}
                />
                <div className="published__title">Название поста</div>
                <img src="images/topImage/1.jpg" alt="" className="published__img"/>
                <div className="published__inform">
                    <div className="published__text">
                        <div className="published__text-type">Рецензия</div>
                        <div className="published__text-name">"Повелитель мух"</div>
                    </div>
                    <Icons like={16} views={16} clock={16}/>
                </div>
            </div>
        );
    }
}

Publish.propTypes = {};

export default Publish;