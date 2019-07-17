import React from "react"
import {Link} from "gatsby";

const RightMenu = () => {
  return (
    <div className="rightmenu">
      <div className="rightmenu__content">
        <div className="rightmenu__title">содержание</div>
        <Link to={'/'} className="rightmenu__book">
          Повелитель мух.............................1
        </Link>
        <Link to={'/'} className="rightmenu__book">
          Три товарища...............................2
        </Link>
        <Link to={'/'} className="rightmenu__book">
          Не отпускай меня...........................3
        </Link>
        <Link to={'/'} className="rightmenu__book">
          1984.......................................4
        </Link>
        <Link to={'/'} className="rightmenu__book">
          451° по фаренгейту.........................5
        </Link>
        <Link to={'/'} className="rightmenu__book">
          Искусство любить...........................6
        </Link>
        <Link to={'/'} className="rightmenu__book">
          Жизнь насекомых............................7
        </Link>
        <Link to={'/'} className="rightmenu__book">
          По ту сторону добра и зла..................8
        </Link>
        <Link to={'/'} className="rightmenu__book">
          Вычислительные машины и разум..............9
        </Link>
        <Link to={'/'} className="rightmenu__book">
          Божественая комедия.......................10
        </Link>
      </div>
    </div>
  )
};

export default RightMenu;
