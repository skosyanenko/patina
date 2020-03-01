import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import { matchPath } from 'react-router';

class NavLinks extends Component {
    activeLink = React.createRef();

    state = {
        navLinks: [
            {title: 'книги', path: '/books', active: false},
            {title: 'топы', path: '/tops', active: false},
            {title: 'критика', path: '/reviews', active: false},
            {title: 'эвенты', path: '/events', active: false},
            {title: 'что нового', path: '/news', active: false}
        ],
        topCoord: null,
        toggleCircle: null
    };

    componentDidMount() {
        this.activeLink &&
        this.positionCircle(this.activeLink)
    }

    componentWillReceiveProps(nextProps) {
        let loc = nextProps.location.pathname;
        this.activeLink &&
        this.positionCircle(this.activeLink, loc);
    }

    calcTop = offset => {
        const width = window.innerWidth;
        if (width < 575) return offset + 75;
        return width <= 1140 ? offset + 75 : offset - 80;
    };

    positionCircle = (el, loc) => {
        const arrOfPath = [];
        this.state.navLinks.map((item, key) => {
            arrOfPath.push(item.path);
        });
        if (arrOfPath.includes(loc)){
            const target = el && el.target || el;
            const topOffset = +target.getBoundingClientRect().top.toFixed() || 0;
            const topCoord = this.calcTop(topOffset);
            this.setState({topCoord, toggleCircle: 1});
        } else {
            this.setState({toggleCircle: 0});
        }
    };

    render() {
        const { navLinks, topCoord, toggleCircle } = this.state;
        const { location: {pathname} } = this.props;
        return (
            <div className="menu__wrapper">
                {navLinks.map((item, key) => (
                    <div className="menu__links" key={key}>
                        <NavLink
                            to={item.path}
                            className="menu__link"
                            onClick={this.positionCircle}
                            ref={node => matchPath(item.path, pathname) && (this.activeLink = node)}
                        >
                            <i className="menu__link-line"/>
                            <span>{item.title}</span>
                        </NavLink>
                    </div>
                ))}
                <span className={`menu__link-circle `} style={{top: topCoord, opacity: toggleCircle}}/>
                <Link to={'/search'} className="menu__search">
                    <div className="menu__search-loupe"/>
                </Link>
            </div>
        );
    }
}

export default NavLinks;



