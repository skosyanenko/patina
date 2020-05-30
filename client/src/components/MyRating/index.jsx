import React, { useState, useEffect } from 'react';
import { Rating } from '@material-ui/lab';
import { withStyles } from '@material-ui/core';
import axios from 'axios';
import Auth from 'services/Authorization';

const { API_URL } = process.env;

const MyRating = ({ bookId, votes, toggleModal }) => {
    const initialState = {
        isVote: false,
        voted:  [],
        mediumVote: 0,
        counters: 0,
        activeVote: 0
    };

    const [state, setState] = useState(initialState);

    const { isVote, voted, mediumVote, counters, activeVote } = state;

    useEffect(() => {
        setState({
            voted: votes && votes,
            isVote: votes && votes.some(item => item.user === Auth.userInfo.id) || false,
            counters: votes && votes.length || 0,
            mediumVote: votes && getMediumVote(votes) ,
            activeVote: votes && votes.map(item => item.user === Auth.userInfo.id && item.vote) || 0
        })
    }, [votes])

    const getMediumVote = (voted) => {
        const votesNumber = voted.map(item => item.vote);

        if (voted.length > 0) {
            return (votesNumber.reduce((acc, curr) => acc + curr, 0) / voted.length).toFixed(2);
        } else {
            return 0;
        }
    };

    const handleClick = (value) => {
        const userId = Auth.userInfo.id;

        if (!Auth.isAuth) return toggleModal(true);

        if (isVote) {
            voted && voted.forEach(item => {
                if (item.user === userId) {
                    return item.vote;
                }
            });
        } else {
            addVote(value);
        }
    };

    const addVote = (value) => {
        const options = Auth.token && {
            headers: { Authorization: `Bearer ${Auth.token}` }};

        axios.post(`${API_URL}/books/${bookId}/vote`, {vote: value}, options)
            .then(res => {
                if (res.status === 200) {
                    const vote = {
                        id: res.data.id,
                        user: Auth.userInfo.id
                    };
                    setState(state => ({
                        ...state,
                        isVote: !state.isVote,
                        voted: [...state.voted, vote],
                        counters: state.counters + 1,
                        mediumVote: (state.mediumVote + value) / (state.counters + 1)
                    }));
                }
            })
            .catch(err => console.log('Ошибка при отправке формы, попробуйте позже!' + err));
    };

    const StyledRating = withStyles({
        iconFilled: {
            color: ' rgba(38, 77, 75, 1)',
        },
        iconHover: {
            color: '#264d4b',
        },
    })(Rating);

    return(
        <div className="rating">
            <div className="rating__wrap">
                <StyledRating
                    name="hover-feedback"
                    value={activeVote[0] > 0 ? +activeVote[0] : +mediumVote}
                    precision={0.5}
                    size="large"
                    onChange={(event, newValue) => {handleClick(newValue)}}
                    disabled={isVote}
                />
            </div>
            <div className={`rating__text ${isVote && ' active'}`}>Ваш голос учтен!</div>
            <div
                className="rating__rate"
                itemType="http://schema.org/AggregateRating"
                itemProp="aggregateRating"
                itemScope
            >
                <span itemProp="ratingValue" content="4.78">{mediumVote} </span>
                /
                <span itemProp="ratingCount" content="20"> {counters}</span>
            </div>
        </div>
    );
}

export default MyRating;