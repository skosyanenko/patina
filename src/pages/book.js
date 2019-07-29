import React from "react";
import Layout from "../components/Layouts/Layout";
import {Link} from "gatsby";
import BookText from "../components/BookText";
import BookImg from "../components/BookImg";
import("../static/sass/include/_base.sass");

const BookPage = () => (
  <Layout>
      <Link to={'/books'} className="arrow-backwards">
          <img  src={require('static/images/icons/arrow.svg')} alt="" className="arrow-backwards__img"/>
      </Link>
      <div className='content new'>
          <BookImg/>
          <BookText/>
      </div>
  </Layout>
);

export default BookPage;
