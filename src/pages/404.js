import React from "react"
import Layout from "../components/Layouts/layout"
import Sorting from "../components/Sorting/index"

const IndexPage = () => (
  <Layout>
    <div className="section">
      <div className="section__container">
        <div className="section__title">Книги</div>
        <div className="section__subtitle">книжная полка</div>
      </div>
      <Sorting />
    </div>
  </Layout>
);

export default IndexPage
