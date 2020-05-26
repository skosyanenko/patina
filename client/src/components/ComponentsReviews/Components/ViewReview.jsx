import React from 'react';
import Link from 'next/link';
import { counterLetters, returnDatePublish } from 'config/config';
import Icons from 'components/Icons';
import TimeToRead from 'components/TimeToRead';

const ViewReview = ({ item: {id, book, likes, description, created_at, title, user}, toggleModal }) => (
   <div className="reviews__result">
       <Link href={'/reviews/[id]'} as={`/reviews/${id}`}>
           <a className="reviews__result-image">
               {book && book.bookImage ? <img src={`${book.bookImage.url}`} alt=""/> : ''}
           </a>
       </Link>
       <div className="reviews__result-wrap">
           <Icons
               likes={likes}
               idContent={id}
               typeContent={'reviews'}
               toggleModal={toggleModal}
               isAllIcons={false}
           />
           <Link href={'/reviews/[id]'} as={`/reviews/${id}`}>
               <>{book && <a className="reviews__result-title">{book.title}</a>}</>
           </Link>
       </div>
       <div className="reviews__result-wrap">
           {description && <TimeToRead textLength={counterLetters(description)}/>}
           <span className="reviews__result-date">{returnDatePublish(created_at)}</span>
       </div>
       <Link href={'/reviews/[id]'} as={`/reviews/${id}`}>
           <a className="reviews__result-subtitle">
               {title}
           </a>
       </Link>
       {user &&
           <Link href={'/profile/[id]'} as={`/profile/${user.id}`}>
               <a className="reviews__result-user">{user.username}</a>
           </Link>
       }
   </div>
);

export default ViewReview;