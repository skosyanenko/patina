import React from 'react';
import Article from './Article';
import Image from './Image';
import CommentBlock from "../../components/CommentBlock";

const NewPage = () => (
    <>
        <div className="container container--new">

            <Image/>

            <Article/>

        </div>

        <CommentBlock/>
    </>
);

export default NewPage;
