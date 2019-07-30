import React from "react";
import Layout from "../components/Layouts/Layout";
import Socials from "../components/Socials";
import TopBox from "../components/TopBox";
import {Link} from "gatsby";
import("../static/sass/include/_buttons.sass");

const TopsPage = () => (
  <Layout>
      <div className="top-title">ТОП 10</div>
      <div className="content">
          <div className="top-grid">
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
              <TopBox number={"03"}
                      title={"1984"}
                      author={"Джордж Оруэлл"}
                      text={"Три тоталитарных государства, где контролируются даже мысли. Мир ненависти, но есть люди, которые еще могут противостоять системе."}
              />
              <TopBox number={"04"}
                      title={"1984"}
                      author={"Джордж Оруэлл"}
                      text={"Три тоталитарных государства, где контролируются даже мысли. Мир ненависти, но есть люди, которые еще могут противостоять системе."}
              />
              <TopBox number={"05"}
                      title={"1984"}
                      author={"Джордж Оруэлл"}
                      text={"Три тоталитарных государства, где контролируются даже мысли. Мир ненависти, но есть люди, которые еще могут противостоять системе."}
              />
              <TopBox number={"06"}
                      title={"1984"}
                      author={"Джордж Оруэлл"}
                      text={"Три тоталитарных государства, где контролируются даже мысли. Мир ненависти, но есть люди, которые еще могут противостоять системе."}
              />
          </div>
      </div>
      <div className="icons">
          <div className="icons__socials">
              <Socials/>
          </div>
          <Link to={'/tops'} className="button-green">Назад</Link>
      </div>
  </Layout>
);

export default TopsPage;
