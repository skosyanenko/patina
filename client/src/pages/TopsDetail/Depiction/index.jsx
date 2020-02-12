import React from 'react';
import {Link} from 'react-router-dom';
import ArrowBackwards from 'components/ArrowBackwards';
import './index.sass';


const Depiction = () => {

    return (
        <div className="depiction">
            <div className="depiction__wrapper">
                <Link to="/tops">
                    <ArrowBackwards/>
                </Link>
                <h1 className="depiction__wrapper-title">ТОП 10</h1>
            </div>
            <p className="depiction__description">
                Несмотря на возросшую популярность телевидения, интернета и прочих современных развлечений, люди до сих пор не перестают читать. Выбрать книгу себе по вкусу далеко не так просто, особенно в области художественной литературы: каждый читатель должен подходить к этому вопросу индивидуально, чтобы в итоге не быть разочарованным в сюжете или в стиле автора, не жалеть о потраченном времени. Чтобы хоть немного помочь вам в этом вопросе, мы составили топ-10 лучших книг по нашему мнению.
            </p>
        </div>
    )
};

export default Depiction;
