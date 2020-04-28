import React, { useState, useEffect } from 'react';
import { Transition } from 'react-transition-group';
import NavLinks from './Components/NavLinks';

const Menu = ({ router, toggle, toggleMenu }) => {
	const initialState = {
		menu: ''
	};

	const [state, setState] = useState(initialState);

	const { menu } = state;

	useEffect(() => {
		const menuPost = toggle ? 'open' : 'close';

		const menuIndex = 'menu--index ' + menuPost;

		setState({
			menu: router.pathname === '/' ? menuIndex : menuPost
		});
	}, [router.pathname, toggle]);

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

export default Menu;

