import React, {Component} from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick';
import './index.sass';

class ModalFilms extends Component {

    render() {
        const {isOpen, toggleModal} = this.props;

        return (
            <Modal className="films" isOpen={isOpen}>
                <Slider
                    ref={c => (this.slider = c)}
                    dots={true}
                    speed={500}
                    infinite={true}
                    slidesToShow={1}
                    slidesToScroll={1}
                >
                    <div className="films__wrapper">
                        <h1 className="films__title">
                            «Повелитель мух» -  кинофильм 1990 г.
                        </h1>
                        <img src="images/topImage/1.jpg" alt="" className="films__img"/>
                        <span className="films__description">
                            Группа кадетов военной школы чудом спасается после авиакатастрофы. Вместе с не приходящим в сознание пилотом они оказываются одни на пустынном острове. Помощи ждать неоткуда и приходится осваиваться в необычных условиях, вести себя по-взрослому. Изначально устанавливаются общие правила: говорит тот, в чьих руках морская раковина; устанавливается дежурство по поддержанию сигнального огня…
                        </span>
                    </div>
                    <div className="films__wrapper">
                        <h1 className="films__title">
                            «Повелитель мух» -  кинофильм 1990 г.
                        </h1>
                        <img src="images/topImage/1.jpg" alt="" className="films__img"/>
                        <span className="films__description">
                            Группа кадетов военной школы чудом спасается после авиакатастрофы. Вместе с не приходящим в сознание пилотом они оказываются одни на пустынном острове. Помощи ждать неоткуда и приходится осваиваться в необычных условиях, вести себя по-взрослому. Изначально устанавливаются общие правила: говорит тот, в чьих руках морская раковина; устанавливается дежурство по поддержанию сигнального огня…
                        </span>
                    </div>
                    <div className="films__wrapper">
                        <h1 className="films__title">
                            «Повелитель мух» -  кинофильм 1990 г.
                        </h1>
                        <img src="images/topImage/1.jpg" alt="" className="films__img"/>
                        <span className="films__description">
                            Группа кадетов военной школы чудом спасается после авиакатастрофы. Вместе с не приходящим в сознание пилотом они оказываются одни на пустынном острове. Помощи ждать неоткуда и приходится осваиваться в необычных условиях, вести себя по-взрослому. Изначально устанавливаются общие правила: говорит тот, в чьих руках морская раковина; устанавливается дежурство по поддержанию сигнального огня…
                        </span>
                    </div>
                    <div className="films__wrapper">
                        <h1 className="films__title">
                            «Повелитель мух» -  кинофильм 1990 г.
                        </h1>
                        <img src="images/topImage/1.jpg" alt="" className="films__img"/>
                        <span className="films__description">
                            Группа кадетов военной школы чудом спасается после авиакатастрофы. Вместе с не приходящим в сознание пилотом они оказываются одни на пустынном острове. Помощи ждать неоткуда и приходится осваиваться в необычных условиях, вести себя по-взрослому. Изначально устанавливаются общие правила: говорит тот, в чьих руках морская раковина; устанавливается дежурство по поддержанию сигнального огня…
                        </span>
                    </div>
                    <div className="films__wrapper">
                        <h1 className="films__title">
                            «Повелитель мух» -  кинофильм 1990 г.
                        </h1>
                        <img src="images/topImage/1.jpg" alt="" className="films__img"/>
                        <span className="films__description">
                            Группа кадетов военной школы чудом спасается после авиакатастрофы. Вместе с не приходящим в сознание пилотом они оказываются одни на пустынном острове. Помощи ждать неоткуда и приходится осваиваться в необычных условиях, вести себя по-взрослому. Изначально устанавливаются общие правила: говорит тот, в чьих руках морская раковина; устанавливается дежурство по поддержанию сигнального огня…
                        </span>
                    </div>
                </Slider>
                <div className="films__close">
                    <div className="films__close-icon"
                         onClick={() => toggleModal(false)}
                    />
                </div>
            </Modal>
        );
    }
}

export default ModalFilms;