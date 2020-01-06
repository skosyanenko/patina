import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Slider from 'react-slick';
import './index.sass';

class IndexReview extends Component {
    state = {
        isBlurSlide: false,
    };

    render() {
        const {isBlurSlide} = this.state;
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            dotsClass: 'indexReview__numb',
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '120px',
            centerMode: true,
            className: "indexReview__slider-center",
            customPaging: i => (
                <div className="indexReview__numb-dot">
                    {`0${i + 1}`}
                </div>
            )
        };
        return (
            <div className="indexReview index-wrapper">
                <Slider {...settings} className="indexReview__slider">
                    <div className={`indexReview__slider-active ${isBlurSlide && 'indexReview__slider-blur'}`}>
                        <div className={`indexReview__slider-img ${isBlurSlide && 'indexReview__slider-left'}`}>
                            <img src={'/images/reviewImage/1.jpg'} alt=""/>
                        </div>
                        <div className="indexReview__slider-bg">
                            <div className="indexReview__slider-title">Над пропастью во ржи</div>
                            <div className="indexReview__slider-text">
                                Роман написан от лица семнадцатилетнего Холдена Колфилда, находящегося на лечении в клинике: он рассказывает об истории, случившейся с ним прошлой зимой и предшествовавшей его болезни. События, о которых он повествует, разворачиваются в
                                предрождественские дни декабря 1949 года. Воспоминания юноши начинаются со дня его отбытия из закрытой школы Пэнси, откуда он был отчислен за неуспеваемость.
                            </div>
                            <Link to={'/review'} className="button-black">Далее</Link>
                        </div>
                    </div>
                    <div className={`indexReview__slider-active ${isBlurSlide && 'indexReview__slider-blur'}`}>
                        <div className={`indexReview__slider-img ${isBlurSlide && 'indexReview__slider-left'}`}>
                            <img src={'/images/reviewImage/2.jpg'} alt=""/>
                        </div>
                        <div className="indexReview__slider-bg">
                        <div className="indexReview__slider-title">Над пропастью во ржи</div>
                        <div className="indexReview__slider-text">
                        Роман написан от лица семнадцатилетнего Холдена Колфилда, находящегося на лечении в клинике: он рассказывает об истории, случившейся с ним прошлой зимой и предшествовавшей его болезни. События, о которых он повествует, разворачиваются в
                        предрождественские дни декабря 1949 года. Воспоминания юноши начинаются со дня его отбытия из закрытой школы Пэнси, откуда он был отчислен за неуспеваемость.
                        </div>
                        <Link to={'/review'} className="button-black">Далее</Link>
                        </div>
                    </div>
                    <div className={`indexReview__slider-active ${isBlurSlide && 'indexReview__slider-blur'}`}>
                        <div className={`indexReview__slider-img ${isBlurSlide && 'indexReview__slider-right'}`}>
                            <img src={'/images/reviewImage/3.jpg'} alt=""/>
                        </div>
                        <div className="indexReview__slider-bg">
                            <div className="indexReview__slider-title">Над пропастью во ржи</div>
                            <div className="indexReview__slider-text">
                                Роман написан от лица семнадцатилетнего Холдена Колфилда, находящегося на лечении в клинике: он рассказывает об истории, случившейся с ним прошлой зимой и предшествовавшей его болезни. События, о которых он повествует, разворачиваются в
                                предрождественские дни декабря 1949 года. Воспоминания юноши начинаются со дня его отбытия из закрытой школы Пэнси, откуда он был отчислен за неуспеваемость.
                            </div>
                            <Link to={'/review'} className="button-black">Далее</Link>
                        </div>
                    </div>
                </Slider>
            </div>
        )
        // return (
        //     <div className="indexReview index-wrapper">
        //         <Slider {...settings} className="indexReview__slider">
        //             <div className="indexReview__slider-left">
        //                 <img src="/images/review/1.jpg" alt=""/>
        //             </div>
        //             <div className="indexReview__slider-center">
        //                 <div className="indexReview__slider-img">
        //                     <img src={'/images/review/2.jpg'} alt=""/>
        //                 </div>
        //                 <div className="indexReview__slider-bg">
        //                     <div className="indexReview__slider-title">Над пропастью во ржи</div>
        //                     <div className="indexReview__slider-text">
        //                         Роман написан от лица семнадцатилетнего Холдена Колфилда, находящегося на лечении в клинике: он рассказывает об истории, случившейся с ним прошлой зимой и предшествовавшей его болезни. События, о которых он повествует, разворачиваются в
        //                         предрождественские дни декабря 1949 года. Воспоминания юноши начинаются со дня его отбытия из закрытой школы Пэнси, откуда он был отчислен за неуспеваемость.
        //                      </div>
        //                     <Link to={'/review'} className="button-black">Далее</Link>
        //                 </div>
        //             </div>
        //             <div className="indexReview__slider-right ">
        //                 <img src="/images/review/3.jpg" alt=""/>
        //             </div>
        //         </Slider>
        //     </div>
        // )
    }
}

export default IndexReview;
