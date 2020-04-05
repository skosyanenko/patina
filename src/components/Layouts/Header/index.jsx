import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { getDocHeight } from 'config/config';
import EntranceProfile from 'components/EntranceProfile';
import './index.sass';

class Header extends Component {
    state = {
        didScroll: true,
        lastScrollTop: 0,
        headerClass: '',
        burger: ''
    };

    static getDerivedStateFromProps(nextProps) {
        if(nextProps.burger || nextProps.location) {
            return {
                burger: nextProps.burger
            }
        }
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };

    getHeaderHeight = () => {
        const width = window.innerWidth;
        if (width > 991) return 80;
        if (width <= 991 && width >767) return 70;
        if (width <= 767) return 60;
    };

    hasScrolled = () => {
        const delta = 5;
        const windowScroll = window.scrollY;

        if (Math.abs(this.state.lastScrollTop - windowScroll) <= delta)
            return;

        if (windowScroll > this.state.lastScrollTop && windowScroll > this.getHeaderHeight()){
            this.setState({
                headerClass: 'is-hidden',
                lastScrollTop: windowScroll
            })
        } else {
            if (windowScroll < getDocHeight()) {
                this.setState({
                    headerClass: 'is-visible',
                    lastScrollTop: windowScroll
                });
            }
            if (this.state.lastScrollTop < this.getHeaderHeight()) {
                this.setState({
                    headerClass: '',
                    lastScrollTop: windowScroll
                })
            }
        }
    };

    handleScroll = () => {
        this.setState({
            didScroll: true
        });
        this.hasScrolled();
    };

    classNames = () => {
        const classes = this.props.location.pathname === '/' ? 'header header--index' : 'header';
        return classes + ' ' + this.state.headerClass;
    };

    render() {
        const { location, toggleModal, toggleMenu } = this.props;
        const { burger } = this.state;

        return (
            <header className={this.classNames()}>
                <div className="header__menu">
                    <div className={`burger ${burger}`} onClick={toggleMenu}>
                        <span className="burger__center"/>
                    </div>
                </div>
                <div className="header__container">
                    <Link to={{pathname: '/', state: {from: location.pathname}}}>
                        <div className="header__container-logo"/>
                    </Link>
                </div>
                <EntranceProfile toggleModal={toggleModal}/>
            </header>
        );
    }
}

export default Header;
