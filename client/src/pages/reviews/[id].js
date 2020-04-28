import React, { Component } from 'react';
import Link from 'next/link';
import axios from 'axios';
import ViewHorizontal from 'components/ComponentsReviews/Views/ViewHorizontal';
import ViewVertical from 'components/ComponentsReviews/Views/ViewVertical';

class ReviewsDetail extends Component {
    state = {
        currentReview: [],
        error: ''
    };

    componentDidMount() {
        const { serverData, err } = this.props;
        this.setState({
            currentReview: serverData,
            error: err
        })
    };

    render () {
        const { currentReview, error } = this.state;
        const { serverDataAuthors } = this.props;

        if (error && error.length > 0) return error;

        return(
            <>
                <Link href={'/reviews'}>
                    <a className="backwards"/>
                </Link>
                { currentReview.viewType === 0
                    ?
                    <ViewHorizontal {...currentReview} authors={serverDataAuthors}/>
                    :
                    <ViewVertical {...currentReview} authors={serverDataAuthors}/>
                }
            </>
        )
    }
}

export async function getServerSideProps({ params }) {
    const { API_URL } = process.env;

    const serverData = await axios.get(`${API_URL}/reviews/${params.id}`)
        .then(res => res.data)
        .catch(err => 'Такой рецензии не существует');

    const serverDataAuthors = await axios.get(`${API_URL}/books/${serverData.book.id}`)
        .then(res => res.data.authors)
        .catch(err => 'Такой рецензии не существует');

    return { props: { serverData, serverDataAuthors } };
}

export default ReviewsDetail;
