import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import NavLinks from './Components/NavLinks';

class Menu extends Component {
	state = {
		menu: '',
		toggle: ''
	};

	static getDerivedStateFromProps(nextProps) {
		if (nextProps.menu || nextProps.location) {
			return {
				menu: nextProps.menu,
				toggle: nextProps.toggle
			}
		} else {
			return {
				header: ''
			}
		}
	};

	render () {
		const { menu, toggle, toggleMenu } = this.props;

		return (
			<>
				<nav className={`menu ${menu}`}>
					<div className="burger open" onClick={toggleMenu}>
						<span className="burger__center"/>
					</div>
					<div className="menu__wrap">
						<NavLinks />
					</div>
				</nav>
				<Transition in={toggle} timeout={50}>
					{state => <div className={'menu__overlay ' + state}/>}
				</Transition>
			</>
		);
	}
}

export default Menu;

