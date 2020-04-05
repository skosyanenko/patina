import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import NavLinks from './components/NavLinks';
import './index.sass';

class Menu extends Component {
	state = {
		menu: '',
		toggle: '',
	};

	static getDerivedStateFromProps(nextProps) {
		if(nextProps.menu || nextProps.location) {
			return {
				menu: nextProps.menu,
				toggle: nextProps.toggle
			}
		}
	};

	render () {
		const { menu, toggle } = this.props;
		const { location } = this.props;

		return (
			<>
				<nav className={`menu ${menu}`}>
					<div className="menu__wrap">
						<NavLinks location={location}/>
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

