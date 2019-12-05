import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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
	}

    render() {
    	const {leftMenuToggle} = this.state;
        return (
			<>
				<div
					className={`menu__burger ${!leftMenuToggle ? 'open' : 'close'}`}
					onClick={this.toggleMenu}
				>
			        <span className="menu__burger-center"/>
				</div>
				<nav className={leftMenuToggle ? 'menu menu--index close' : 'menu'}>
					<div className="menu__container">
						<Link to="/tops" className="menu__link">топы</Link>
						<Link to="/books" className="menu__link">книги</Link>
						<Link to="/review" className="menu__link">критика</Link>
						<Link to="/news" className="menu__link">что нового</Link>
						<Link to="/events" className="menu__link">эвенты</Link>
					</div>
					<div className="menu__search">
						<img src="/images/icons/loupe.svg" alt="" className="menu__loupe"/>
					</div>
				</nav>
			</>
        )
    }
}

export default Menu;

