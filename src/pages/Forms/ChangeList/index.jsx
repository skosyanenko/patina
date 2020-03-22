import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class ChangeList extends Component {
    state = {
        data: [],
        currentItem: {}
    };

    componentDidMount() {
        axios.get(`/api/v1/${this.props.API}`)
            .then(({data: data}) => this.setState({data}))
            .catch(err => console.log(err));
    }

    deleteItem = id => {
        axios.delete(`/api/v1/${this.props.API}/${id}`)
            .then(res => res.status && console.log('Удалено успешно'))
            .then(() => this.setState(state => ({
                data: state.data.filter(item => item.id !== id)
            })))
            .catch(err => console.log(err));
    };

    render() {
        const {data} = this.state;
        const {API} = this.props;

        return (
            <div className="change-form__wrapper">
                <span className="control__title">Редактирование/удаление данных:</span>
                <div className="control__wrapper">
                    {data && data.map((item, key) => (
                        <div className="control__wrap" key={key}>
                            <span className="control__wrap-title">{API === 'authors' ? item.name : item.title}</span>
                            <div className="control__wrap-icons">
                                <div className="control__wrap-change"/>
                                <div className="control__wrap-delete" onClick={() => this.deleteItem(item.id)}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

ChangeList.propTypes = {
    API: PropTypes.string
};

export default ChangeList;