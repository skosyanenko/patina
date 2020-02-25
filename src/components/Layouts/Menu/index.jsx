import React, {Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './index.sass';
import {Transition} from "react-transition-group";

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
		topActive: null,
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

		const topOffset = +target.getBoundingClientRect().top.toFixed();
		const topActive = topOffset + 25;
		this.setState({topActive});
	};

    render() {
    	const {leftMenuToggle, lineWidth, navLinks, topActive} = this.state;
    	const {location} = this.props;

		if (!location) return false;

    	const isIndex = location.pathname === '/';

    	const defaults = {
    		className: 'menu__link',
			onClick: this.lineAnimate
		};

        return (
			<Fragment>
				<div
					className={`burger ${leftMenuToggle ? ' close' : 'open'} ${isIndex ? 'burger--index' : ''}`}
					onClick={this.toggleMenu}
				>
			        <span className="burger__center"/>
				</div>
				<nav className={`menu ${isIndex && 'menu--index'} ${!leftMenuToggle ? 'open active' : 'menu close  '}`}>
					<div className="menu__wrapper">
						{navLinks.map((item, key) => (
							<NavLink to={item.path} key={key} {...defaults}>
								<i className="menu__link-line" style={{width: lineWidth}}/>
								{item.title}
							</NavLink>
						))}
						<span className={`menu__link-circle ${isIndex ? 'block' : ''}`} style={{top: topActive}}/>
						<Link to={'/search'} className="menu__search">
							<div className="menu__search-loupe"/>
						</Link>
					</div>
					<Transition
						in={leftMenuToggle}
						timeout={50}
					>
						{state =>
							<div className={'menu__overlay ' + state}/>
						}
					{/*<div className={`menu__overlay ${leftMenuToggle ? '' : 'active'}`}/>*/}
					</Transition>
				</nav>
			</Fragment>
        )
    }
}

export default Menu;

