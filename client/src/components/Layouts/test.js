import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import '../../static/sass/project.sass'
import Header from './Header'
import Menu from './Menu'
import RightMenu from './RightMenu'
import Footer from './Footer'
import './Header/index.sass'
import './Menu/index.sass'
import './RightMenu/index.sass'
import './Footer/index.sass'

const Test = ({ children }) => {

    let currLoc = window.location.pathname,
      currClass = '',
      isRightMenu = true,
      isIndex = false;

    const menuContainer = useRef();

    switch (currLoc) {
        case '/':
            currClass = 'section section--index';
            isRightMenu = false;
            isIndex = true;
            break;
        case '/events':
            currClass = 'section section--events';
            isRightMenu = false;
            break;
        default:
            currClass = 'section';
    }

    const toggleMenu = (e) => {
        e.target.classList.toggle('open');
        menuContainer.current.classList.toggle('close');
    };

    return (
        <>
            <Header index={isIndex}/>
            <div className="wrapper">
                <div className="menu__burger" onClick={e => toggleMenu(e)}>
                    <span className="menu__burger-center"/>
                </div>
                <Menu index={isIndex} ref={menuContainer}/>
                <main className={currClass}>
                    {children}
                </main>
                { (isRightMenu) ? <RightMenu books={this.state.books} /> : ''}
            </div>
            <Footer />
        </>
    )
};

Test.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Test;
