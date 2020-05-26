import React, { Component } from 'react';
import { Rating } from '@material-ui/lab';
import { withStyles } from '@material-ui/core';
import axios from 'axios';
import Auth from 'services/Authorization';

const { API_URL } = process.env;

class MyRating extends  Component {
    state = {
        isVote: false,
        votes:  [],
        mediumVote: 0,
        counters: 0,
        activeVote: 0
    };

    componentDidMount() {
        const { votes } = this.props;
        this.setState({
            isVote: votes && votes.some(item => item.user === Auth.userInfo.id) || false,
            votes: votes,
            counters: votes && votes.length || 0,
            mediumVote: votes && this.getMediumVote() ,
            activeVote: votes && votes.map(item => item.user === Auth.userInfo.id && item.vote) || 0
        })
    };

    componentDidUpdate(prevProps, prevState) {
        const { votes } = this.props;
        if (prevProps.votes !== votes) {
            this.setState({
                isVote: votes && votes.some(item => item.user === Auth.userInfo.id) || false,
                votes: votes,
                counters: votes && this.props.votes.length || 0,
                mediumVote: votes && this.getMediumVote() ,
                activeVote: votes && votes.map(item => item.user === Auth.userInfo.id && item.vote) || 0
            })
        }
    };

    getMediumVote = () => {
        const { votes } = this.props;
        const votesNumber = votes.map(item => item.vote);

        if (votes.length > 0) {
            return (votesNumber.reduce((acc, curr) => acc + curr, 0) / votes.length).toFixed(2);
        } else {
            return 0;
        }
    };

    handleClick = (value) => {
        const { toggleModal } = this.props;
        const { isVote, votes } = this.state;

        const userId = Auth.userInfo.id;

        if (!Auth.isAuth) return toggleModal(true);

        if (isVote) {
            votes && votes.forEach(item => {
                if (item.user === userId) {
                    return item.vote;
                }
            });
        } else {
            this.addVote(value);
        }
    };

    addVote = (value) => {
        const { bookId } = this.props;
        const options = Auth.token && {
            headers: { Authorization: `Bearer ${Auth.token}` }};

        axios.post(`${API_URL}/books/${bookId}/vote`, {vote: value}, options)
            .then(res => {
                if (res.status === 200) {
                    const vote = {
                        id: res.data.id,
                        user: Auth.userInfo.id
                    };
                    this.setState(state => ({
                        isVote: !state.isVote,
                        votes: [...state.votes, vote],
                        counters: state.counters + 1,
                        mediumVote: (state.mediumVote + value) / (state.counters + 1)
                    }));
                }
            })
            .catch(err => console.log('Ошибка при отправке формы, попробуйте позже!' + err));
    }

    render() {
        const { activeVote, isVote, mediumVote, counters } = this.state;

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
                        onChange={(event, newValue) => {this.handleClick(newValue)}}
                        disabled={isVote}
                    />
                </div>
                <div className={`rating__text ${isVote && ' active'}`}>Ваш голос учтен!</div>
                <div className="rating__rate"
                     itemType="http://schema.org/AggregateRating"
                     itemProp="aggregateRating"
                     itemScope
                >
                    <span itemProp="ratingValue" content="4.78">{mediumVote} </span>
                    /
                    <span itemProp="ratingCount" content="20"> {counters}</span>
                </div>
            </div>
        )
    }
}

export default MyRating;