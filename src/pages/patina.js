import React from "react";
import LayoutIndex from "../components/Layouts/LayoutIndex";
import IndexTop from "../components/IndexTop";
import IndexTitle from "../components/IndexTitle";
import IndexBook from "../components/IndexBook";
import IndexReview from "../components/IndexReview";
import("../static/sass/include/_base.sass");

const PatinaPage = () => (
      <LayoutIndex>
          <IndexTitle
              title={'Топы'}
              subtitle={'ПОДБОРКИ КНИГ НА РАЗЛИЧНЫЕ ТЕМЫ'}
          />
          <IndexTop/>
          <IndexTitle
              title={'Книги'}
              subtitle={'КНИЖНАЯ ПОЛКА'}
          />
          <IndexBook/>
          <IndexTitle
              title={'Критика'}
              subtitle={'РЕЦЕНЗИИ НА КНИГИ РАЗЛИЧНЫХ АВТОРОВ И ЖАНРОВ'}
          />
          <IndexReview/>
          <IndexTitle
              title={'Что нового'}
              subtitle={'НОВОСТИ ИЗ МИРА ЛИТЕРАТУРЫ'}
          />


      </LayoutIndex>
);

export default PatinaPage;
