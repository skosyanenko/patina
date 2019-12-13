import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './index.sass';

class Menu extends Component {
    state = {
        leftMenuToggle: false,
    };

	componentDidMount() {
		this.props.isIndex && this.toggleMenu();
	}

	toggleMenu = () => {
		this.setState(state => ({
			leftMenuToggle: !state.leftMenuToggle
		}));
	};

    render() {
    	const {leftMenuToggle} = this.state;
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
						<NavLink to="/books" className="menu__link">книги</NavLink>
						<NavLink to="/tops" className="menu__link">топы</NavLink>
						<NavLink to="/review" className="menu__link">критика</NavLink>
						<NavLink to="/news" className="menu__link">что нового</NavLink>
						<NavLink to="/events" className="menu__link">эвенты</NavLink>
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

