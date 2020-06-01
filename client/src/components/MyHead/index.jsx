import React from 'react';
import Head from 'next/head';

const MyHead = ({ title, description, link, robots, fontOne, fontTwo, adSense }) => {
    return (
          <Head>
              <title>{title}</title>
              <link rel="icon" href="/favicon.ico"/>
              <link rel="canonical" href={`https://the-patina.ru${link}`}/>
              <meta name="description" content={description}/>
              <meta name="keywords" content="книги, подборки книг, рецензии, новости, литература"/>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
              <meta property="og:locale" content="ru_RU"/>
              <meta property="og:type" content="website"/>
              <meta property="og:title" content={title}/>
              <meta property="og:description" content={description}/>
              <meta property="og:url" content={`https://the-patina.ru${link}`}/>
              <meta property="og:site_name" content="Patina"/>
              <meta property="og:image" content={`/sharing/patina.jpg`}/>
              <meta name="robots" content={robots}/>
              <link rel="alternate" href={'https://the-patina.ru/'} hrefLang="ru"/>
              <meta name="google-site-verification" content="nPFyCJ2mic6IdQreBa26g07v_RGW1VZ7CczxQocITMI" />
              <link rel="preload" href="/static/fonts/WaverlyCF-Thin.woff2" as="font" type="font/woff2" crossorigin="anonymous"/>
              <link rel="preload" href="/static/fonts/WaverlyCF-Light.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
              <link rel="preload" href="/static/fonts/WaverlyCF-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
              <link rel="preload" href="/static/fonts/WaverlyCF-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
              <link rel="preload" href="/static/fonts/WaverlyCF-ExtraBold.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
              <link rel="preload" href="/static/fonts/OpenSansCondensed-Light.ttf" as="font" type="font/woff2" crossOrigin="anonymous"/>
              <link rel="preload" href="/static/fonts/OpenSansCondensed-Bold.ttf" as="font" type="font/woff2" crossOrigin="anonymous"/>
              {fontOne && <link rel="preload" href={fontOne} as="font" type="font/woff2" crossOrigin="anonymous"/>}
              {fontTwo && <link rel="preload" href={fontTwo} as="font" type="font/woff2" crossOrigin="anonymous"/>}
              {adSense && <script data-ad-client="ca-pub-5165499495824246" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"/>}
          </Head>
    )
}

export default MyHead