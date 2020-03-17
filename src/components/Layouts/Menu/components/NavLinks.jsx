import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import { matchPath } from 'react-router';

class NavLinks extends Component {
    activeLink = React.createRef();

    state = {
        navLinks: [
            {title: 'книги', path: '/books'},
            {title: 'топы', path: '/tops'},
            {title: 'критика', path: '/reviews'},
            {title: 'эвенты', path: '/events'},
            {title: 'что нового', path: '/news'}
        ],
        topCoord: null,
        toggleCircle: null
    };

    componentWillReceiveProps(nextProps) {
        let location = nextProps.location.pathname;
        let currLoc = location.match(/books|tops|reviews|events|news/);
        this.activeLink && this.positionCircle(this.activeLink, currLoc);
    }

    calcTop = offset => {
        const width = window.innerWidth;
        if (width < 575) return offset + 70;
        if (width <= 767) return offset + 75;
        return width <= 1140 ? offset + 75 : offset - 80;
    };

    positionCircle = (el, loc) => {
        let arrOfPath = [];

        const {navLinks} = this.state;
        navLinks.map(item => (arrOfPath.push(item.path)));

        if (loc !== null){
            let target = el && el.target || el;
            if (target.current !== null) {
                const topOffset = +target.getBoundingClientRect().top.toFixed() || 0;
                const topCoord = this.calcTop(topOffset);
                this.setState({topCoord, toggleCircle: 1});
            }
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



