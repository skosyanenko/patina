import React from "react"
import PropTypes from "prop-types";
import Header from "./header/index";
import Menu from "./menu/index";
import Footer from "./footer/index";
import ("./header/index.sass");
import ("./menu/index.sass");

const Layout = ({ children }) => {
  return (
      <React.Fragment>
          <Header />
          <div className="main-wrapper">
              <Menu />
              <main>{children}</main>
          </div>
          <Footer />
      </React.Fragment>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
