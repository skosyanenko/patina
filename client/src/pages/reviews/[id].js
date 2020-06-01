import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import ViewHorizontal from 'components/ComponentsReviews/Views/ViewHorizontal';
import ViewVertical from 'components/ComponentsReviews/Views/ViewVertical';
import MyHead from 'components/MyHead';
import CommentBlock from 'components/CommentBlock';

const ReviewsDetail = ({ err, currentReview, serverDataAuthors, toggleModal }) => {

    if (err && err.length > 0) return err;

    return(
        <>
            <MyHead
                title={currentReview.title}
                description={currentReview.description}
                link={`/reviews/${currentReview.id}`}
                robots={'all'}
                fontOne={'/static/fonts/IZVESTIA.ttf'}
            />
            <>
                <Link href={'/reviews'}>
                    <a className="backwards"/>
                </Link>
                { currentReview.viewType === 0
                    ?
                    <ViewHorizontal {...currentReview} authors={serverDataAuthors} toggleModal={toggleModal}/>
                    :
                    <ViewVertical {...currentReview} authors={serverDataAuthors} toggleModal={toggleModal}/>
                }
                <CommentBlock
                    idContent={currentReview.id}
                    typeContent={'reviews'}
                    comments={currentReview. comments}
                />
            </>
        </>
    );
}

export async function getServerSideProps({ params }) {
    const { API_URL } = process.env;

    const currentReview = await axios.get(`${API_URL}/reviews/${params.id}`)
        .then(res => res.data)
        .catch(err => 'Такой рецензии не существует');

    const serverDataAuthors = await axios.get(`${API_URL}/books/${currentReview.book.id}`)
        .then(res => res.data.authors)
        .catch(err => 'Такой рецензии не существует');

    return { props: { currentReview, serverDataAuthors } };
}

export default ReviewsDetail;
