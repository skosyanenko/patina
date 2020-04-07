import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { matchPath, withRouter} from 'react-router';
import { routes } from 'routes';

class NavLinks extends Component {
    activeLink = React.createRef();

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

    static getDerivedStateFromProps(nextProps) {
        return {
            nextLocation: nextProps.location.pathname
        }
    }

    componentDidMount() {
        this.positionCircle();
    };

    positionCircle = () => {
        const topOffset = +this.activeLink.getBoundingClientRect().top.toFixed() || 0;
        const topCoord = this.calcTop(topOffset);
        this.setState({topCoord, toggleCircle: 1});
    };

    isActiveRoute = path => {
        const {nextLocation} = this.state;
        const currentRoute = routes.find(route => matchPath(path, route));
        const isNav = currentRoute.group === 'nav';
        return currentRoute && isNav && nextLocation === path;
    };

    calcTop = offset => {
        const width = window.innerWidth;
        if (width < 575) return offset + 70;
        if (width <= 767) return offset + 75;
        return width <= 1140 ? offset + 75 : offset - 80;
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
                            onClick={this.positionCircle}
                            ref={node => this.isActiveRoute(item.path) && (this.activeLink = node)}
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



