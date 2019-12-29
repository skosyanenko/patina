import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './index.sass';

class Menu extends Component {
    state = {
    	lineWidth: null,
        leftMenuToggle: false,
    };

	componentDidMount() {
		this.props.isIndex &&
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
		const lineWidth = 300 - rightOffset;
	};

    render() {
    	const {leftMenuToggle, lineWidth} = this.state;

    	const defaults = {
    		className: 'menu__link',
			onClick: this.lineAnimate
		};

        return (
			<>
				<div
					className={`navigate menu__burger ${this.props.isIndex ? leftMenuToggle ? 'close' : 'open' : 'block'} `}
					onClick={this.toggleMenu}
				>
			        <span className="menu__burger-center"/>
				</div>
				<nav className={`menu ${this.props.isIndex && 'menu--index'} ${!leftMenuToggle ? 'open' : 'menu close  '}`}>
					<div className="menu__container">
						<NavLink to="/books" {...defaults}>
							<i className="menu__line"/>
							книги
						</NavLink>
						<NavLink to="/tops" {...defaults}>
							<i className="menu__line"/>
							топы
						</NavLink>
						<NavLink to="/review" {...defaults}>
							<i className="menu__line"/>
							критика
						</NavLink>
						<NavLink to="/events" {...defaults}>
							<i className="menu__line"/>
							эвенты
						</NavLink>
						<NavLink to="/news" {...defaults}>
							<i className="menu__line"/>
							что нового
						</NavLink>
					</div>
					<div className="menu__search ">
						<div className="menu__loupe navigate"/>
					</div>
				</nav>
			</>
        )
    }
}

export default Menu;

