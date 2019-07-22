import React from "react";
import Layout from "../components/Layouts/layout";
import Socials from "../components/Socials";
import TopBox from "../components/TopBox";
import {Link} from "gatsby";
import("../static/sass/include/_buttons.sass");
import("../static/sass/include/_base.sass");

const TopsPage = () => (
  <Layout>
      <div className="top-title">ТОП 10</div>
      <div className="content">
          <TopBox number={"01"}
                  title={"СТО ЛЕТ ОДИНОЧЕСТВА"}
                  author={"Габриэль Гарсиа Маркес"}
                  text={"Здесь излишни слова. В этом романе жизнь каждого героя пронизана одиночеством, впрочем, как и городка, где живут эти люди."}
          />
          <TopBox number={"02"}
                  title={"1984"}
                  author={"Джордж Оруэлл"}
                  text={"Три тоталитарных государства, где контролируются даже мысли. Мир ненависти, но есть люди, которые еще могут противостоять системе."}
          />

      </div>
      <div className="icons">
          <div className="icons__socials">
              <Socials/>
          </div>
          <Link to={'/tops'} className="button-return">Назад</Link>
      </div>
  </Layout>
);

export default TopsPage;
