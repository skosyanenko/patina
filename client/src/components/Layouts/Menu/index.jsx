import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './index.sass';

class Menu extends Component {
    state = {
    	navLinks: [
			{title: 'книги', path: '/books'},
			{title: 'топы', path: '/tops'},
			{title: 'критика', path: '/reviews'},
			{title: 'эвенты', path: '/events'},
			{title: 'что нового', path: '/news'}
		],
    	lineWidth: null,
        leftMenuToggle: false,
    };

	componentDidMount() {
		this.props.location &&
		this.props.location.pathname === '/' &&
		this.toggleMenu();
	}

	toggleMenu = () => {
		this.setState(state => ({
			leftMenuToggle: !state.leftMenuToggle
		}));
	};

	lineAnimate = e => {
		const {target} = e;
		const rightOffset = +target.getBoundingClientRect().right.toFixed();
		const lineWidth = 280 - rightOffset;
		this.setState({lineWidth});
	};

    render() {
    	const {leftMenuToggle, lineWidth, navLinks} = this.state;
    	const {location} = this.props;

		if (!location) return false;

    	const isIndex = location.pathname === '/';

    	const defaults = {
    		className: 'menu__link',
			onClick: this.lineAnimate
		};

        return (
			<>
				<div
					className={`navigate menu__burger ${isIndex ? leftMenuToggle ? 'close' : 'open' : 'block'} `}
					onClick={this.toggleMenu}
				>
			        <span className="menu__burger-center"/>
				</div>
				<nav className={`menu ${isIndex && 'menu--index'} ${!leftMenuToggle ? 'open' : 'menu close  '}`}>
					<div className="menu__wrapper">
						{navLinks.map((item, key) => (
							<NavLink to={item.path} key={key} {...defaults}>
								<i className="menu__line" style={{width: lineWidth}}/>
								{item.title}
							</NavLink>
						))}
					</div>
					<Link to={'/search'} className="menu__search">
						<div className="menu__search-loupe navigate"/>
					</Link>
				</nav>
			</>
        )
    }
}

export default Menu;

