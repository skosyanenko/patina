import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from 'routes';
import { CSSTransition } from 'react-transition-group';
import Header from './components/Layouts/Header';
import Menu from './components/Layouts/Menu';
import RightMenu from './components/Layouts/RightMenu';
import EntranceModal from './components/EntranceModal';
import Footer from './components/Layouts/Footer';
import BtnScrollToTop from './components/BtnScrollToTop';
import UndefinedPage from './pages/UndefinedPage';
import 'static/sass/project.sass';

const App = ({ location }) => {
    const isIndex = location.pathname === '/';

    const initialState = {
        modalIsOpen: false,
        isAnimate: false,
        menu: '',
        burger: '',
        toggle: !isIndex
    };

    const [state, setState] = useState(initialState);

    const { modalIsOpen, isAnimate, toggle, menu, burger } = state;

    const switchClasses = (path) => {
        switch(path) {
            case '/events':
                return 'page--events';
            case '/':
                return 'page--index';
            default:
                return 'page';
        }
    };

    useEffect(()=> {
        const burgerPost = toggle ? 'open' : 'close';
        const menuPost = toggle ? 'open' : 'close';

        const isResponsive = window.width <= 1140;

        const burgerIndex = 'burger--index ' + burgerPost;
        const menuIndex = 'menu--index ' + menuPost;

        setState({
            ...state,
            toggle: (!isIndex && isResponsive) ? true : toggle,
            burger: isIndex ? burgerIndex : burgerPost,
            menu: isIndex ? menuIndex : menuPost,
            isAnimate: !isAnimate
        });
    }, [location, toggle]);

    const toggleModal = () => setState({...state, modalIsOpen: !modalIsOpen});

    const toggleMenu = () => setState({...state, toggle: !toggle});

    return(
        <div className={`${modalIsOpen ? 'blur' : 'wrapper'}`}>
            <Header
                location={location}
                toggleModal={toggleModal}
                toggleMenu={toggleMenu}
                burger={burger}
                toggle={toggle}
            />

            <div className="wrapper__layout">

                <Menu location={location} menu={menu} toggle={toggle}/>

                <CSSTransition
                    in={isAnimate}
                    appear={true}
                    timeout={600}
                    classNames="fade"
                >
                    <main className={location && switchClasses(location.pathname)}>
                        <Switch>
                            {routes.map(({exact, path, component}) => (
                                <Route
                                    key={path}
                                    exact={exact}
                                    path={path}
                                    component={component}
                                />
                            ))}
                            <Route path="*" component={UndefinedPage}/>
                        </Switch>
                    </main>
                </CSSTransition>

                { location.pathname !== '/' && location.pathname !== '/events' && <RightMenu/>}

                <BtnScrollToTop/>

                <EntranceModal
                    isOpen={modalIsOpen}
                    toggleModal={toggleModal}
                />
            </div>
            <Footer/>
        </div>
    )
};

export default App;

