import React, { Component } from 'react'
import Link from 'next/link';
import { getDocHeight } from 'config/config';
import EntranceProfile from 'components/EntranceProfile';

class Header extends Component {
    state = {
        didScroll: true,
        lastScrollTop: 0,
        headerClass: '',
        toggle: false
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };

    hasScrolled = () => {
        const delta = 5;
        const windowScroll = window.scrollY;

        if (Math.abs(this.state.lastScrollTop - windowScroll) <= delta)
            return;

        if (windowScroll > this.state.lastScrollTop && windowScroll > 60){
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
            if (this.state.lastScrollTop < 60) {
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
        const classes = this.props.router.pathname === '/' ? 'header header--index' : 'header';
        return classes + ' ' + this.state.headerClass + ' ' + this.props.header;
    };

    render() {
        const { router, toggleModal, toggleMenu } = this.props;

        return (
            <header className={this.classNames()}>
                <div className="header__menu">
                    <div className="burger close" onClick={toggleMenu}>
                        <span className="burger__center"/>
                    </div>
                </div>
                <div className="header__container">
                    <Link href={{pathname: '/', state: {from: router.pathname}}}>
                        <a className="header__container-logo"/>
                    </Link>
                </div>
                <EntranceProfile toggleModal={toggleModal}/>
            </header>
        );
    }
}

export default Header;
