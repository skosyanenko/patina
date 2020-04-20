import React, { useState, useEffect } from 'react';
import { withRouter } from 'next/router';
import { CSSTransition } from 'react-transition-group';
import Header from 'components/Layouts/Header';
import Menu from 'components/Layouts/Menu';
import RightMenu from 'components/Layouts/RightMenu';
import EntranceModal from 'components/EntranceModal';
import Footer from 'components/Layouts/Footer';
import BtnScrollToTop from 'components/BtnScrollToTop';
import 'public/static/sass/project.sass';

const MyApp = ({ Component, pageProps, router }) => {
    const isIndex = router.pathname === '/';

    const initialState = {
        modalIsOpen: false,
        isAnimate: false,
        menu: '',
        header: '',
        toggle: true
    };

    const [state, setState] = useState(initialState);

    const { modalIsOpen, isAnimate, toggle, menu, header } = state;

    useEffect(() => {
        const menuPost = toggle ? 'open' : 'close';

        const menuIndex = 'menu--index ' + menuPost;

        const headerInvisible = window.scrollY ? 'is-hidden' : 'is-invisible';

        setState({
            ...state,
            menu: isIndex ? menuIndex : menuPost,
            header: toggle  ? headerInvisible : '',
            isAnimate: !isAnimate
        });
    }, [router, toggle]);

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

    const toggleModal = () => setState({...state, modalIsOpen: !modalIsOpen});

    const toggleMenu = () => setState({...state, toggle: !toggle});

    return(
        <div className={`${modalIsOpen ? 'blur' : 'wrapper'}`}>
            <Header
                router={router}
                toggleModal={toggleModal}
                toggleMenu={toggleMenu}
                toggle={toggle}
                header={header}
            />

            <div className="wrapper__layout">

                <Menu router={router}
                      menu={menu}
                      toggle={toggle}
                      toggleMenu={toggleMenu}
                />

                <CSSTransition
                    in={isAnimate}
                    appear={true}
                    timeout={600}
                    classNames="fade"
                >
                    <main className={router && switchClasses(router.pathname)}>
                        <Component {...pageProps} />
                    </main>
                </CSSTransition>

                { router.pathname !== '/' && router.pathname !== '/events' && <RightMenu/>}

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

export default withRouter(MyApp);

