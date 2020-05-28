import React from 'react';
import Head from 'next/head';

const { API } = process.env;

const MyHead = ({ title, description, link, robots }) => {
    return (
          <Head>
              <title>{title}</title>
              <link rel="icon" href="/favicon.ico"/>
              <link rel="canonical" href={`${API}${link}`}/>
              <meta name="description" content={description}/>
              <meta name="keywords" content="книги, подборки книг, рецензии, новости, литература"/>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
              <meta property="og:locale" content="ru_RU"/>
              <meta property="og:type" content="website"/>
              <meta property="og:title" content={title}/>
              <meta property="og:description" content={description}/>
              <meta property="og:url" content={`${API}${link}`}/>
              <meta property="og:site_name" content="Patina"/>
              <meta property="og:image" content={`${API}/public/sharing/patina.jpg`}/>
              <meta name="robots" content={robots}/>
              <link rel="alternate" href={API} hrefLang="ru"/>
              <script data-ad-client="ca-pub-5165499495824246" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"/>
          </Head>
    )
}

export default MyHead