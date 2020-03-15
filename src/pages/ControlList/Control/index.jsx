import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {formRoutes} from 'config/config';
import './index.sass';

class Control extends Component {
    state = {
        events: []
    };

    componentDidMount() {
        axios.get('/api/v1/events')
            .then(({data: events}) => this.setState({events}))
            .catch(err => console.log(err));
    }

    deleteEvent = id => {
        axios.delete(`/api/v1/events/${id}`)
            .then(res => res.status && console.log('Удалено успешно'))
            .then(() => this.setState(state => ({
                events: state.events.filter(event => event.id !== id)
            })))
            .catch(err => console.log(err));
    };

    render() {
        const {events} = this.state;

        return (
            <div className="control">
                <span className="control__title">Добавление новых данных:</span>
                <div className="control__wrapper">
                    {Object.values(formRoutes).slice(0,-2).map((item, key) => (
                        <div className="control__wrap" key={key}>
                            <div className={`control__wrap-icon control__add-${item.icon}`}/>
                            <span className="control__wrap-title">{item.title}</span>
                            <Link to={`${item.path}`} className="button button-green">Перейти</Link>
                        </div>
                    ))}
                </div>
                <span className="control__title">Удаление эвентов:</span>
                <div className="div control__wrapper">
                    {events && events.map((event, key) => (
                        <div className="control__wrap" key={key}>
                            <span className="control__wrap-title">{event.title}</span>
                            <div className="control__wrap-delete" onClick={() => this.deleteEvent(event.id)}/>
                        </div>
                    ))}
                </div>

            </div>
        );
    }
}

export default Control;