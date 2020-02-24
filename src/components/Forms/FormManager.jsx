import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import HookForm from './HookForm';

class FormManager extends Component {
    state = {
        success: false,
        typeView: ''
    };

    hookView = typeView => this.setState({typeView});

    static defaultProps = {
        button: 'Добавить',
        prefix: '',
        classNamePref: ''
    };

    onSubmit = values => {
        console.log(values);
        axios.post(`/api/v1/${this.props.API}`, values)
            .then(res => {
                console.log('Submit Response: ', res.data);
                this.setState({success: true});
            })
            .catch(err => {
                console.log('Ошибка при отправке формы, попробуйте позже!' + err)
            });
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
        const {success, typeView, events} = this.state;

        return (
            <div className="page--form">
                <div className="form__title">
                    {this.props.title}
                </div>

                <HookForm
                    {...this.props}
                    onSubmit={this.onSubmit}
                    hookView={this.hookView}
                    typeView={typeView}
                />

                {events && events.map(event => (
                  <div style={{width: '200px', display: 'flex', justifyContent: 'space-between'}}>
                      <strong>{event.title}</strong>
                      <span style={{color: 'red'}} onClick={() => this.deleteEvent(event.id)}>Удалить</span>
                  </div>
                ))}

                {success &&
                    <div className="form__success">
                        Форма успешно отправлена!
                    </div>
                }
            </div>
        );
    }
}

FormManager.propTypes = {
    fields:          PropTypes.array,
    API:             PropTypes.string,
    title:           PropTypes.string,
    button:          PropTypes.string,
    prefix:          PropTypes.string,
    classPrefix:     PropTypes.string,
    updateState:     PropTypes.bool,
    isSave:          PropTypes.bool
};

export default FormManager;