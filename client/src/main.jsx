import React from 'react';
import {CSSTransition} from 'react-transition-group';
import {Route, Switch} from 'react-router-dom';
import Header from './components/Layouts/Header';
import Menu from './components/Layouts/Menu';
import Footer from './components/Layouts/Footer';
import RightMenu from './components/Layouts/RightMenu';
import 'static/sass/project.sass';



const Main = ({location, routes}) => {
    const switchClasses = (path) => {
        switch(path) {
            case '/events':
                return 'section--events';
            case '/':
                return 'section--index';
            default:
                return 'section';
        }
    };

    return (
        <>
            <Header location={location}/>

            <div className="wrapper">

                <Menu location={location}/>

                <CSSTransition
                    in={true}
                    appear={true}
                    timeout={600}
                    classNames="fade"
                >
                    <main className={location && switchClasses(location.pathname)}>
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

            </div>

            <Footer/>
        </>
    );
};


export default Main;