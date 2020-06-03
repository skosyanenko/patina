import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const { API_URL } = process.env;

const LinkToReview = ({ idContent }) => {
    const [state, setState] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/books/${idContent}`)
            .then(res => {
                setState(res.data.reviews)
            })
            .catch(err => console.log(err));
    }, [idContent]);

    if (state && state.length !== 0) {
        return (
            <Link href={'/reviews/[id]'} as={`/reviews/${state[0].id}`}>
                <a className="button button-green">Рецензии</a>
            </Link>
        )
    } else {
        return '';
    }
}

export default LinkToReview;