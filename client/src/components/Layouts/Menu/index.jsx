import React from 'react';
import { Transition } from 'react-transition-group';
import NavLinks from './Components/NavLinks';

const Menu = ({ router, toggle, toggleMenu, menu }) => (
	<>
		<nav className={`menu ${menu} ${router.pathname === '/' ? 'menu--index ' : ''}`}>
			<div className="burger open" onClick={toggleMenu}>
				<span className="burger__center"/>
			</div>
			<div className="menu__wrap">
				<NavLinks />
			</div>
		</nav>
		<Transition in={toggle} timeout={50}>
			{state => <div className={'menu__overlay ' + state} onClick={toggleMenu}/>}
		</Transition>
	</>
);

export default Menu;

