import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {routes} from 'routes';
import {CSSTransition} from 'react-transition-group';
import Header from './components/Layouts/Header';
import Menu from './components/Layouts/Menu';
import RightMenu from './components/Layouts/RightMenu';
import EntranceModal from './components/EntranceModal';
import Footer from './components/Layouts/Footer';
import 'static/sass/project.sass';

class App extends Component {
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
        const {location} = this.props;

        return(
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
                                {routes.map(route => (
                                    <Route
                                        key={route.path}
                                        exact={route.path !== '*'}
                                        path={route.path}
                                        component={route.component}
                                    />
                                ))}
                            </Switch>
                        </main>
                    </CSSTransition>

                    {location.pathname !== '/' && location.pathname !== '/events' && <RightMenu/>}

                    <EntranceModal
                        isOpen={modalIsOpen}
                        toggleModal={this.toggleModal}
                    />
                </div>
                <Footer/>
            </div>
        )
    }

};

export default App;