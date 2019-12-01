import React from "react";
import Layout from "../components/Layouts/Layout";
import Pagination from "../components/Pagination";
import SectionTop from "../components/SectionTop";
import Alphabet from "../components/Alphabet";
import ListBook from "../components/ListBook";

const BooksPage = () => (
  <Layout>
      <SectionTop
        title={"Книги"}
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
