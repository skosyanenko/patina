import React, {Component} from 'react';
import Header from './Header';
import Menu from './Menu';
import RightMenu from './RightMenu';
import Footer from './Footer';
import 'static/sass/project.sass';

class Layout extends Component {

    static defaultProps = {
        mainClassName: 'section',
        isRightMenu: true,
        isIndex: false
    };

    render() {
        const {mainClassName, isRightMenu, isIndex, children} = this.props;

        return (
            <>
                <Header isIndex={isIndex}/>

                <div className="wrapper">

                    <Menu isIndex={isIndex}/>

                    <main className={mainClassName}>
                        {children}
                    </main>

                    {isRightMenu && <RightMenu/>}
                </div>

                <Footer />
            </>
        );
    }
}

export default Layout;