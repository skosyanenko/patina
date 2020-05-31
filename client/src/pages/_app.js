import React, { useState, useEffect } from 'react';
import { withRouter } from 'next/router';
import Router from 'next/router'
import { CSSTransition } from 'react-transition-group';
import NProgress from 'nprogress'
import Header from 'components/Layouts/Header';
import Menu from 'components/Layouts/Menu';
import RightMenu from 'components/Layouts/RightMenu';
import EntranceModal from 'components/EntranceModal';
import UnknownModal from 'components/UnknownModal';
import Footer from 'components/Layouts/Footer';
import BtnScrollToTop from 'components/BtnScrollToTop';
import Auth from 'services/Authorization';
import '../../public/static/sass/project.sass';
import 'react-markdown-editor-lite/lib/index.css';


Router.events.on('routeChangeStart', (url) => {
    NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const MyApp = ({ Component, pageProps, router }) => {
    const initialState = {
        isAnimate: false,
        toggle: true,
        header: '',
        menu: '',
        load: false
    };

    const [state, setState] = useState(initialState);

    const [modal, setModal] = useState(false);

    const [unknownModal, setUnknownModal] = useState(false);

    const { isAnimate, toggle, header, menu } = state;

    useEffect(() => {

        const headerInvisible = window.scrollY ? 'is-hidden' : 'is-invisible';
        const menuPost = toggle ? 'menu--open' : 'menu--close';

        setState({
            ...state,
            header: toggle  ? headerInvisible : '',
            isAnimate: !isAnimate,
            menu: menuPost,
        });
    }, [router.pathname, toggle]);

    useEffect(() => {
        setState({
            ...state,
            menu:  'menu--close',
            toggle: false
        });
    }, [router.pathname])

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

    process.browser && Auth.checkAuth();

    const toggleMenu = () => setState({...state, toggle: !toggle});

    return(
        <div className={`${modal || unknownModal ? 'blur' : 'wrapper'}`} id="app">
            <Header
                router={router}
                toggleModal={setModal}
                toggleMenu={toggleMenu}
                toggle={toggle}
                header={header}
            />

            <div className="wrapper__layout">

                <Menu router={router}
                      toggle={toggle}
                      toggleMenu={toggleMenu}
                      menu={menu}
                />

                <CSSTransition
                    in={isAnimate}
                    appear={true}
                    timeout={600}
                    classNames="fade"
                >
                    <main className={router && switchClasses(router.pathname)}>
                        <Component
                            {...pageProps}
                            toggleModal={setUnknownModal}
                            router={router}
                        />
                    </main>
                </CSSTransition>

                { router.pathname !== '/' && router.pathname !== '/events' && <RightMenu/>}

                <BtnScrollToTop/>

                <EntranceModal
                    isOpen={modal}
                    toggleModal={setModal}
                />

                <UnknownModal
                    isOpen={unknownModal}
                    toggleModal={setUnknownModal}
                />
            </div>
            <Footer/>
        </div>
    )
};

export default withRouter(MyApp);

