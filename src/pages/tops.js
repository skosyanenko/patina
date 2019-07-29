import React from "react";
import Layout from "../components/Layouts/Layout";
import Pagination from "../components/Pagination";
import SectionTop from "../components/SectionTop";
import ListTop from "../components/ListTop";
import TopImg from "../components/TopImg";
import("../static/sass/include/_base.sass");

const TopsPage = () => (
  <Layout>
      <SectionTop title={"Топы"}
                  subtitle={"подборки книг на различные темы"}
                  isSorting={false}
      />
      <div className="content">
          <TopImg/>
          <ListTop/>
      </div>
      <Pagination/>
  </Layout>
);

export default TopsPage;
