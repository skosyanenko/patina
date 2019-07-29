import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Menu from "./Menu";
import RightMenu from "./RightMenu";
import Footer from "./Footer";
import("./Header/index.sass");
import("./Menu/index.sass");
import("./RightMenu/index.sass");
import("./Footer/index.sass");
import("../../static/sass/project.sass");

const Layout = ({ children }) => {
    return (
    <React.Fragment>
        <Header />
        <div className="wrapper">
            <Menu />
            <main className="section">
                {children}
            </main>
            <RightMenu />
        </div>
        <Footer />
    </React.Fragment>
    )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;