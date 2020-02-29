import React, {useEffect, useState} from 'react';
import {Transition} from 'react-transition-group';
import NavLinks from './components/NavLinks';
import './index.sass';

const Menu = ({location}) => {
	const isIndex = location.pathname === '/';

	const initialState = {
		burger: '',
		menu: '',
		toggle: !isIndex,
	};

	const [state, setState] = useState(initialState);

	const {toggle, menu, burger} = state;

	useEffect(() => {
		const burgerPost = toggle ? 'open' : 'close';
		const menuPost = toggle ? 'open' : 'close';

		const burgerIndex = 'burger--index ' + burgerPost;
		const menuIndex = 'menu--index ' + menuPost;

		setState({
			toggle: !isIndex ? true : toggle,
			burger: isIndex ? burgerIndex : burgerPost,
			menu: isIndex ? menuIndex : menuPost,
		});

	}, [location, toggle]);

	const toggleMenu = () => setState({...state, toggle: !toggle});

	return (
		<>
			<div className={`burger ${burger}`} onClick={toggleMenu}>
				<span className="burger__center"/>
			</div>
			<nav className={`menu ${menu}`}>
				<div className="menu__wrap">
					<NavLinks location={location} />
				</div>
			</nav>
			<Transition in={toggle} timeout={50}>
				{state => <div className={'menu__overlay ' + state}/>}
			</Transition>
		</>
	);
};

export default Menu;

