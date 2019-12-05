import React from 'react'
import {Link} from 'react-router-dom'

const Menu = React.forwardRef((props, ref) => {
    const links = document.querySelectorAll('.menu__link');
    links.forEach(item => (
          item.addEventListener('onclick', () => (
                this.add('active').sibling.classList.remove('active')
          ))
    ));
    return (
        <nav className={props.index ? 'menu menu--index close' : 'menu'} ref={ref}>
            <div className="menu__container">
                <Link to={'/tops'} className="menu__link">
                    топы
                </Link>
                <Link to={'/books'} className="menu__link">
                    книги
                </Link>
                <Link to={'/review'} className="menu__link">
                    критика
                </Link>
                <Link to={'/news'} className="menu__link">
                    что нового
                </Link>
                <Link to={'/events'} className="menu__link">
                    эвенты
                </Link>
            </div>
            <div className="menu__search">
                <img src="/images/icons/loupe.svg" alt="" className="menu__loupe" />
            </div>
        </nav>
    )
});

export default Menu;
