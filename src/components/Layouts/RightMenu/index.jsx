import React from "react"
import {Link} from "gatsby";

const RightMenu = () => {
    return (
        <div className="rightmenu">
            <div className="rightmenu__content">
                <div className="rightmenu__title">содержание</div>
                <Link to={'/book'} className="rightmenu__book">
                    <span className="rightmenu__book-title">Повелитель мух</span>
                    <span className="rightmenu__book-num">1</span>
                </Link>
                <Link to={'/book'} className="rightmenu__book">
                    <span className="rightmenu__book-title">Три товарища</span>
                    <span className="rightmenu__book-num">2</span>
                </Link>
                <Link to={'/book'} className="rightmenu__book">
                    <span className="rightmenu__book-title">Не отпускай меня</span>
                    <span className="rightmenu__book-num">3</span>
                </Link>
                <Link to={'/book'} className="rightmenu__book">
                    <span className="rightmenu__book-title">1984</span>
                    <span className="rightmenu__book-num">4</span>
                </Link>
                <Link to={'/book'} className="rightmenu__book">
                    <span className="rightmenu__book-title">451° по фаренгейту</span>
                    <span className="rightmenu__book-num">5</span>
                </Link>
                <Link to={'/book'} className="rightmenu__book">
                    <span className="rightmenu__book-title">Искусство любить</span>
                    <span className="rightmenu__book-num">6</span>
                </Link>
                <Link to={'/book'} className="rightmenu__book longtitle">
                    <span className="rightmenu__book-title">Клуб любителей книг и пирогов из картофельных очистков</span>
                    <span className="rightmenu__book-num">7</span>
                </Link>
                <Link to={'/book'} className="rightmenu__book longtitle">
                    <span className="rightmenu__book-title">По ту сторону добра и зла</span>
                    <span className="rightmenu__book-num">8</span>
                </Link>
                <Link to={'/book'} className="rightmenu__book longtitle">
                    <span className="rightmenu__book-title">Вычислительные машины и разум</span>
                    <span className="rightmenu__book-num">9</span>
                </Link>
                <Link to={'/book'} className="rightmenu__book longtitle">
                    <span className="rightmenu__book-title">Жареные зеленые помидоры в кафе "Полустанок"</span>
                    <span className="rightmenu__book-num">10</span>
                </Link>
            </div>
        </div>
    )
};

export default RightMenu;
