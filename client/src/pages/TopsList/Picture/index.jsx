import React, {Component} from 'react';
import Typed from 'react-typed';
import * as VanillaTilt from 'vanilla-tilt';
import './index.sass';

class Picture extends Component {
    componentDidMount(){
        VanillaTilt.init(this.rootNode, {
            max: 25,
            speed: 400,
            glare: true,
            reverse: true,
            'max-glare': 0.5
        });
    }

    render() {
        return (
            <div className="picture">
                <div className="picture__quote"/>
                <div className="picture__wrapper">
                    <div className="picture__image">
                        <img src="/images/tops/bg.png" alt="" className="picture__image-background" ref={node => (this.rootNode = node)}/>
                        <div className="picture__image-border"/>
                    </div>

                    <div className="picture__citation">
                        <div className="picture__citation-wrap">
                            <Typed className="wrapperQuote__container-text"
                                   strings = {["Чтение хороших книг — это разговор с самыми лучшими людьми прошедших времен, и притом такой разговор, когда они сообщают нам только лучшие свои мысли."]}
                                   typeSpeed = {50}
                                   backSpeed = {20}
                                   startDelay = {1500}
                                   showCursor = {false}
                                   backDelay = {3000}
                                   loop = {true}
                            />
                            <span className="picture__citation-author">Декарт</span>
                            <div className="picture__quote"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Picture;
