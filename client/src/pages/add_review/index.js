import React from 'react';
import FormManager from 'components/Forms/FormManager';
import fields from 'components/Forms/Fields/reviews.json'
import MyHead from 'components/MyHead';
import axios from 'axios';

const AddReviewForm = ({ serverBooks }) => (
    <>
        <MyHead
            title={'Добавить рецензию - Patina'}
            description={'Добавить рецензию или отзыв на любое литературное произведение - Patina'}
            link={'/add_review'}
            robots={'all'}
        />
        <FormManager
            fields={fields}
            title={'Добавить рецензию'}
            button={'Добавить'}
            classPrefix={''}
            api={'reviews'}
            optionBooks={serverBooks}
        />
    </>
);

export async function getServerSideProps() {
    const { API_URL } = process.env;

    const serverBooks = await axios.get(`${API_URL}/books?_limit=500`)
        .then(res => res.data)
        .catch(err => console.log(err));

    return { props: { serverBooks } };
}

export default AddReviewForm;
