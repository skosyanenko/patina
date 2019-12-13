import React from 'react';
import './index.sass';
import Socials from '../Socials';
import Icons from '../Icons';

const ReviewText = () => {
    return(
        <div className="review-container">
            <div className="reviewBox">
                <div className="reviewBox__triangle"> </div>
                <div className="reviewBox__title">ПОВЕЛИТЕЛЬ МУХ</div>
                <div className="reviewBox__citation">
                <span className="reviewBox__citation-text">
                    ‘’Разнообразный и богатый опыт начало повседневной работы по формированию позиции позволяет оценить значение направлений прогрессивного развития.’’
                </span>
                </div>
                <div className="reviewBox__text">
                    <div className="reviewBox__user">
                        <div className="reviewBox__user-photo">
                        <span className="reviewBox__user-sign">
                            ИИ
                        </span>
                        </div>
                        <div className="reviewBox__user-name">
                            И. И. Иванов
                        </div>
                        <div className="reviewBox__user-rating">
                            <div className="like">
                                <i className="icon-like" style={{backgroundImage: `url(/images/icons/thumbsup.svg)`}}/>
                                <span className="like-count">13</span>
                            </div>
                            <div className="dislike">
                                <i className="icon-dislike" style={{backgroundImage: `url(/images/icons/thumbsup.svg)`}}/>
                                <span className="like-count">13</span>
                            </div>
                        </div>

                        <div className="reviewBox__num">
                            <span className="reviewBox__num-symbol">№</span>
                            <span className="reviewBox__num-count">1</span>
                        </div>
                    </div>
                    <div className="reviewBox__about">
                        <p>Разнообразный и богатый опыт начало повседневной работы по формированию позиции позволяет оценить значение направлений прогрессивного развития. Задача организации, в особенности же рамки и место обучения кадров в значительной степени обуславливает создание существенных финансовых и административных условий.</p>
                        <p>Повседневная практика показывает, что начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке форм развития. Повседневная практика показывает, что начало повседневной работы по формированию позиции играет важную роль в формировании дальнейших направлений развития. Разнообразный и богатый опыт укрепление и развитие структуры играет важную роль в формировании форм развития.</p>
                        <p>Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции требуют от нас анализа дальнейших направлений развития. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности позволяет оценить значение системы обучения кадров, соответствует насущным потребностям. Значимость этих проблем настолько очевидна, что новая модель организационной деятельности обеспечивает широкому кругу (специалистов).</p>
                        <p>Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции требуют от нас анализа дальнейших направлений развития. Идейные соображения высшего порядка, а также постоянный количественный рост и сфера нашей активности позволяет оценить значение системы обучения кадров, соответствует насущным потребностям. Значимость этих проблем настолько очевидна, что новая модель организационной деятельности обеспечивает широкому кругу (специалистов).</p>
                    </div>
                    <div className="reviewBox__number">1</div>
                </div>
            </div>
            <div className="review-container__socials">
                <Socials/>
                <Icons views={118}/>
            </div>
        </div>
    )
};

export default ReviewText;
