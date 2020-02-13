import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {Route, Switch} from 'react-router-dom';
import Header from './components/Layouts/Header';
import Menu from './components/Layouts/Menu';
import Footer from './components/Layouts/Footer';
import RightMenu from './components/Layouts/RightMenu';
import ModalEntrance from './components/ModalEntrance';
import 'static/sass/project.sass';


class Main extends Component {
    state = {
        modalIsOpen: false
    };

    switchClasses = (path) => {
        switch(path) {
            case '/events':
                return 'page--events';
            case '/':
                return 'page--index';
            default:
                return 'page';
        }
    };

    toggleModal = bool => this.setState({modalIsOpen: bool});

    render() {
        const {modalIsOpen} = this.state;
        const {location, routes} = this.props;

        return (
            <div className={`${modalIsOpen && 'blur' || 'wrapper'}`}>
                <Header location={location} toggleModal={this.toggleModal}/>

                    <div className="wrapper__layout">

                        <Menu location={location}/>

                        <CSSTransition
                            in={true}
                            appear={true}
                            timeout={600}
                            classNames="fade"
                        >
                            <main className={location && this.switchClasses(location.pathname)}>
                                <Switch>
                                    {routes.map((route, key) => (
                                        <Route
                                            key={key}
                                            exact={route.path !== '*'}
                                            path={route.path}
                                            component={route.component}
                                        />
                                    ))}
                                </Switch>
                            </main>
                        </CSSTransition>

                        {location.pathname !== '/' && location.pathname !== '/events' && <RightMenu/>}

                        <ModalEntrance
                          isOpen={modalIsOpen}
                          toggleModal={this.toggleModal}
                        />
                    </div>
                <Footer/>
            </div>
        );
    }
}

export default Main;