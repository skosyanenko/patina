import React from "react";
import Layout from "../components/Layouts/Layout";
import NewText from "../components/NewText";
import NewImg from "../components/NewImg";
import("../static/sass/include/_base.sass");

const NewPage = () => (
  <Layout>
      <div className='content new'>
            <NewText/>
            <NewImg/>
      </div>
  </Layout>
);

export default NewPage;
