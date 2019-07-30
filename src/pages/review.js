import React from "react";
import Layout from "../components/Layouts/Layout";
import {Link} from "gatsby";
import ReviewAuthor from "../components/ReviewAuthor";
import ReviewText from "../components/ReviewText";

const ReviewPage = () => (
  <Layout>
      <Link to={'/books'} className="arrow-backwards">
          <img  src={require('static/images/icons/arrow.svg')} alt="" className="arrow-backwards__img"/>
      </Link>
      <div className='content new'>
          <ReviewAuthor/>
          <ReviewText/>
      </div>
  </Layout>
);

export default ReviewPage;
