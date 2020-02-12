import React, {Component} from 'react';
import './index.sass';
import UserInfo from "../UserInfo";

class View_1 extends Component {
    formatType = (type, value) => {
        switch (type) {
            case 'Paragraph':
            case 'List':
                return <div className="review-wrap__paragraph">{value}</div>;
            case 'Marker':
                return <mark>{value}</mark>;
            case 'Quote':
                return <span className="review-wrap__quote">{value}</span>;
            case 'Image':
                return <img src="images/topImage/1.jpg" alt="" className="review-wrap__image"/>;
            case 'Header':
                return <h1 className="review-wrap__heading">{value}</h1>;
            case 'Delimiter':
                return <p className="review-wrap__delimiter">* * *</p>;
        }
    };

    render() {
        return (
            <>
                <div className="review-wrap">
                    {/*{data.items && data.items.map((item, key) => {*/}
                    {/*    const Component = this.formatType(item.type, item.text.value);*/}
                    {/*        return (*/}
                    {/*        <Component key={key} className={`review-wrap__${item.type}`}/>*/}
                    {/*    );*/}
                    {/*})}*/}
                    <p className="review-wrap__paragraph">	результате авиакатастрофы на необитаемый остров попадают дети. Выбрав главного, которым становится мальчик по имени Ральф, они начинают думать, как же им 	        отсюда спастись. В результате соперничества появляется второй лидер – мальчик по имени Джек – за которым на другую часть острова уходит всё больше и больше детей, пока Ральф не остаётся один вместе с тремя друзьями: толстым Хрюшей и близнецами Эриком и Сэмом.</p>
                    <p className="review-wrap__paragraph">	результате авиакатастрофы на необитаемый остров попадают дети. Выбрав главного, которым становится мальчик по имени Ральф, они начинают думать, как же им 	        отсюда спастись. В результате соперничества появляется второй лидер – мальчик по имени Джек – за которым на другую часть острова уходит всё больше и больше детей, пока Ральф не остаётся один вместе с тремя друзьями: толстым Хрюшей и близнецами Эриком и Сэмом.</p>
                    <mark>результате авиакатастрофы на необитаемый остров попадают дети. Выбрав главного, которым становится мальчик по имени Ральф, они начинают думать, как же им 	</mark>
                    <span className="review-wrap__quote">результате авиакатастрофы на необитаемый остров попадают дети. Выбрав главного, которым становится мальчик по имени Ральф, они начинают думать, как же им результате авиакатастрофы на необитаемый остров попадают дети. Выбрав главного, которым становится мальчик по имени Ральф, они начинают думать, как же им </span>
                    <img src="images/topImage/1.jpg" alt="" className="review-wrap__image"/>
                    <p className="review-wrap__delimiter">* * *</p>
                </div>
                <UserInfo/>
            </>
        );
    }
}

export default View_1;