import React from "react";
import Layout from "../components/Layouts/layout";
import Pagination from "../components/Pagination";
import SectionTop from "../components/SectionTop";
import Alphabet from "../components/Alphabet";
import ListBook from "../components/ListBook";
import("../static/sass/include/_base.sass");

const BooksPage = () => (
  <Layout>
      <SectionTop title={"Книги"}
                  subtitle={"книжная полка"}
                  isSorting={true}
      />
      <div className='content'>
          <Alphabet/>
          <ListBook/>
      </div>
      <Pagination/>
  </Layout>
);

export default BooksPage;
