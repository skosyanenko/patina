import React, { Component, createRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { matchPath, withRouter} from 'react-router';
import { routes } from 'routes';

class NavLinks extends Component {
    activeLink = createRef();

    state = {
        navLinks: [
            { title: 'книги', path: '/books' },
            { title: 'топы', path: '/charts' },
            { title: 'критика', path: '/reviews' },
            { title: 'эвенты', path: '/events' },
            { title: 'что нового', path: '/news' }
        ],
        topCoord: null,
        toggleCircle: null
    };

    componentDidMount() {
        this.handleNavChange();
    };

    componentDidUpdate(prevProps) {
        const {location} = this.props;
        if (prevProps.location !== location) {
            if (!this.isNavRoute(location.pathname)) {
                this.activeLink = null;
            }
            this.handleNavChange();
        }
    }

    isActive = path => {
        const {location: {pathname}} = this.props;
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

        return (
            <div className="menu__wrapper">
                <div className="menu__links">
                    {navLinks.map((item, key) => (
                        <NavLink
                            to={item.path}
                            key={key}
                            className="menu__link"
                            onClick={this.handleNavChange}
                            exact={true}
                            ref={node => this.setRef(node, item.path)}
                        >
                            <i className="menu__link-line"/>
                            <span>{item.title}</span>
                        </NavLink>
                    ))}
                </div>
                <span className={`menu__link-circle `} style={{top: topCoord, opacity: toggleCircle}}/>
                <Link to={'/search'} className="menu__search">
                    <div className="menu__search-loupe"/>
                </Link>
            </div>
        );
    }
}

export default withRouter(NavLinks);



