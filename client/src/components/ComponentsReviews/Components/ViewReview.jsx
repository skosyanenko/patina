import React from 'react';
import Link from 'next/link';
import { counterLetters, returnDatePublish } from 'config/config';
import Icons from 'components/Icons';
import TimeToRead from 'components/TimeToRead';

const ViewReview = ({ item: {id, book, like, description, created_at, title, userId} }) => (
  <div className="reviews__result">
      <Link href={'/reviews/[id]'} as={`/reviews/${id}`}>
          <a className="reviews__result-image">
              {book && <img src={`${process.env.API_URL}${book.bookImage.url}`} alt=""/>}
          </a>
      </Link>
      <div className="reviews__result-wrap">
          <Icons likes={like}/>
          <Link href={'/reviews/[id]'} as={`/reviews/${id}`}>
              <>{book && <a className="reviews__result-title">{book.title}</a>}</>
          </Link>
      </div>
      <div className="reviews__result-wrap">
          {/*<TimeToRead textLength={counterLetters(description)}/>*/}
          <span className="reviews__result-date">{returnDatePublish(created_at)}</span>
      </div>
      <Link href={'/reviews/[id]'} as={`/reviews/${id}`}>
          <a className="reviews__result-subtitle">
              {title}
          </a>
      </Link>
      <Link href={'/profile/[id]'} as={`/profile/${userId}`}>
          <a className="reviews__result-user">Тетя Мотя</a>
      </Link>
  </div>
);

export default ViewReview;