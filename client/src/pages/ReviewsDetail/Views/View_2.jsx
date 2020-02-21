import React, {Component} from 'react';
import UserInfo from '../UserInfo';
import Writer from '../Writer';
import './index.sass';

class View_2 extends Component {
    formatType = (type, value) => {
        switch (type) {
            case 'Paragraph':
            case 'List':
                return <div className="review-wrap__paragraph">{value}</div>;
            case 'Marker':
                return <mark>{value}</mark>;
            case 'Quote':
                return <p className="review-wrap__quote">{value}</p>;
            case 'Image':
                return <img src="images/topImage/1.jpg" alt="" className="review-wrap__image"/>;
            case 'Header':
                return <h3 className="review-wrap__heading">{value}</h3>;
            case 'Delimiter':
                return <p className="review-wrap__delimiter">* * *</p>;
        }
    };

    render() {
        const {title, subtitle, description, date, likes} = this.props;

        return (
            <>
                <div className="container-review">
                    <Writer/>

                    <div className="container-review__text">
                        <h1 className="container-review__text-title">{title}</h1>
                        <span className="container-review__text-subtitle">{subtitle}</span>
                    </div>
                </div>

                <div className="review-wrap">
                    {description && Object.keys(description).map((item, key) => {
                        const Component = this.formatType(item, description[item]);
                        return(
                          <Component key={key}/>
                        )
                    })}
                    {/*<p className="review-wrap__paragraph">	</p>*/}
                    {/*<p className="review-wrap__paragraph">	результате авиакатастрофы на необитаемый остров попадают дети. Выбрав главного, которым становится мальчик по имени Ральф, они начинают думать, как же им 	        отсюда спастись. В результате соперничества появляется второй лидер – мальчик по имени Джек – за которым на другую часть острова уходит всё больше и больше детей, пока Ральф не остаётся один вместе с тремя друзьями: толстым Хрюшей и близнецами Эриком и Сэмом.</p>*/}
                    {/*<mark>результате авиакатастрофы на необитаемый остров попадают дети. Выбрав главного, которым становится мальчик по имени Ральф, они начинают думать, как же им 	</mark>*/}
                    {/*<p className="review-wrap__quote">результате авиакатастрофы на необитаемый остров попадают дети. Выбрав главного, которым становится мальчик по имени Ральф, они начинают думать, как же им результате авиакатастрофы на необитаемый остров попадают дети. Выбрав главного, которым становится мальчик по имени Ральф, они начинают думать, как же им </p>*/}
                    {/*<img src="images/topImage/1.jpg" alt="" className="review-wrap__image"/>*/}
                    {/*<p className="review-wrap__delimiter">* * *</p>*/}
                </div>
                <UserInfo/>
            </>
        );
    }
}

export default View_2;