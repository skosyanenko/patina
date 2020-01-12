import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import InputText from './Input';
import InputFile from './File';
import Select from "./Select";

const fields = [
    {
        name: 'book',
        label: 'Название книги',
        img: 'books',
        type: 'text'
    },
    {
        name: 'author',
        label: 'Автор',
        img: 'fun',
        type: 'text'
    },
    {
        name: 'weight',
        label: 'Количество страниц в книге',
        img: 'books',
        type: 'text'
    },
    {
        name: 'films',
        label: 'Фильмы, снятые по книге',
        img: 'films',
        type: 'text'
    },
    {
        name: 'quote',
        label: 'Цитата из книги',
        img: 'quote',
        type: 'text'
    },
    {
        name: 'shortDescription',
        label: 'Краткое описание книги',
        img: 'author',
        type: 'text'
    },
    {
        name: 'fullDescription',
        label: 'Описание книги',
        img: 'author',
        type: 'text'
    },
    {
        name: 'coverImage',
        label: 'Добавить обложку книги',
        type: 'file'
    },
    {
        name: 'bookImage',
        label: 'Добавить иллюстрацию для книги',
        type: 'file'
    },
    {
        name: 'readLink',
        label: 'Добавить pdf-книги',
        type: 'file'
    }
];

const FormBook =() => {
    const { handleSubmit, register } = useForm();

    const onSubmit = values => {
        console.log(values);
        axios.post('/api/books',{values})
          .then(res => console.log(res.data))
          .catch(err => console.log(err));
    };

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-book">
                {fields.map((field, key) => {
                    const Component = field.type === 'text' ? InputText : InputFile;
                    return (
                        <Component
                            key={key}
                            label={field.label}
                            img={field.img}
                            name={field.name}
                            register={register}
                        />
                    );
                })}
                <Select register={register}/>
                <button type="submit" className="button buttonGreen">
                    Добавить
                </button>
            </div>
        </form>
    );
};

export default FormBook;