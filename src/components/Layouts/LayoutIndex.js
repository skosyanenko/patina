import React from "react";
import PropTypes from "prop-types";
import HeaderIndex from "./HeaderIndex";
import Menu from "./Menu";
import Footer from "./Footer";
import("./HeaderIndex/index.sass");
import("./Menu/index.sass");
import("./RightMenu/index.sass");
import("./Footer/index.sass");
import("../../static/sass/project.sass");

const LayoutIndex = ({ children }) => {
    return (
    <React.Fragment>
        <HeaderIndex />
        <div className="wrapper">
            <Menu />
            <main className="section-index">
                {children}
            </main>
        </div>
        <Footer />
    </React.Fragment>
    )
};

LayoutIndex.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutIndex;