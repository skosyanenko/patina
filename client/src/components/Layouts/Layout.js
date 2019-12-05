import React, {Component, useRef} from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Menu from './Menu';
import RightMenu from './RightMenu';
import Footer from './Footer';

class Layout extends Component {
    state = {
        currLoc: window.location.pathname,
        currClass: '',
        isRightMenu: true,
        isIndex: false,
        books: this.props.books,
        menuContainer: useRef
    };

    componentDidMount() {
        this.getCurrentState();
    }


    getCurrentState = () => {
        switch (this.state.currLoc) {
            case '/':
                this.setState({
                    currClass: 'section section--index',
                    isRightMenu: false,
                    isIndex: true
            });
                break;
            case '/events':
                this.setState({
                    currClass: 'section section--events',
                    isRightMenu: false
            });
                break;
            default:
                this.setState({
                    currClass: 'section'
            });
        }
    };

    toggleMenu = () => {
        this.setState(prevState => ({
            isIndex: !prevState.isIndex,
        }));
    };



    render() {
        const {currClass, isRightMenu, isIndex, menuContainer, books} = this.state;

        return (
            <>
                <Header index={isIndex}/>
                <div className="wrapper">
                    <div className={`menu__burger open ${isIndex && 'close'}`} onClick={this.toggleMenu}>
                    <span className="menu__burger-center"/>
                </div>
                <Menu index={isIndex} ref={menuContainer}/>
                    <main className={currClass}>
                        {this.props.children}
                    </main>
                { (isRightMenu) ? <RightMenu books={books} /> : ''}
                </div>
                <Footer />
            </>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;