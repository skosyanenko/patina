import React from 'react';
import Author from 'components/Author';
import Icons from 'components/Icons';

const Publish = ({ textLength, createdAt, firstName, lastName }) => (
    <div className="published">
        <Author
            isTimeToRead={true}
            textLength={textLength}
            date={createdAt}
            name={firstName}
            surname={lastName}
        />
        <div className="published__title">Название поста</div>
        <img src="/images/topImage/1.jpg" alt="" className="published__img"/>
        <div className="published__wrapper">
            <div className="published__text">
                <div className="published__text-type">Рецензия</div>
                <div className="published__text-name">"Повелитель мух"</div>
            </div>
            <Icons like={16} views={16} clock={16}/>
        </div>
    </div>
);

export default Publish;