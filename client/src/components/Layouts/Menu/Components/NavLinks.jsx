import React, { Component, createRef, Fragment } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { matchPath } from 'react-router';
import { routes } from 'config/config';

class NavLinks extends Component {
    activeLink = createRef();

    state = {
        navLinks: [
            { title: 'книги', path: '/books' },
            { title: 'топы', path: '/charts' },
            { title: 'критика', path: '/reviews' },
            { title: 'ивенты', path: '/events' },
            { title: 'что нового', path: '/articles' }
        ],
        topCoord: null,
        toggleCircle: null
    };

    componentDidMount() {
        this.handleNavChange();
    };

    componentDidUpdate(prevProps) {
        const { router } = this.props;
        if (prevProps.router !== router) {
            if (!this.isNavRoute(router.pathname)) {
                this.activeLink = null;
            }
            this.handleNavChange();
        }
    };

    isActive = path => {
        const {router: {pathname}} = this.props;
        const isCurrent = pathname === path;
        return isCurrent && this.isNavRoute(path);
    };

    isNavRoute = path => {
        const matchedRoute = routes.find(route => matchPath(path, route));
        return matchedRoute && matchedRoute.group === 'nav';
    };

    handleNavChange = e => {
        const element = e ? e.target : this.activeLink;
        if (!element || element.current === null) {
            return this.setState({toggleCircle: 0});
        }
        this.positionCircle(element);
    };

    setRef = (node, path) => {
        return this.isActive(path) && (this.activeLink = node);
    };

    positionCircle = element => {
        const topOffset = +element.getBoundingClientRect().top.toFixed() || 0;
        const topCoord = this.calcTop(topOffset);
        this.setState({topCoord, toggleCircle: 1});
    };

    calcTop = offset => {
        const width = window.innerWidth;
        if (width < 575) return offset + 70;
        if (width <= 767) return offset + 75;
        return width <= 1140 ? offset + 75 : offset - 78;
    };

    render() {
        const { navLinks, topCoord, toggleCircle } = this.state;
        const { router } = this.props;

        return (
            <div className="menu__wrapper">
                <div className="menu__links">
                    {navLinks.map((item, key) => (
                        <Fragment key={key}>
                            <Link href={item.path}>
                                <a className={`menu__link ${router.pathname === item.path ? 'active' : ''}`}
                                   onClick={this.handleNavChange}
                                   ref={node => this.setRef(node, item.path)}
                                >
                                    <i className="menu__link-line"/>
                                    <span>{item.title}</span>
                                </a>
                            </Link>
                        </Fragment>
                    ))}
                </div>
                <span className={`menu__link-circle `} style={{top: topCoord, opacity: toggleCircle}}/>
                <Link href="/search">
                    <a className="menu__search">
                        <div className="menu__search-loupe"/>
                    </a>
                </Link>
            </div>
        );
    }
}

export default withRouter(NavLinks);



