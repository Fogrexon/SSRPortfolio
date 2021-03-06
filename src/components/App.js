import React from 'react';
import Head from 'next/head';
import { NavigationBar, Footer } from './navigations/Components';

const App = ({
  children, metadata,
}) => {
  const {
    title, description, keywords, image, url, ogp,
  } = metadata;
  return (
    <>
      <Head>
        <title>{title || "Fogrex's Website"}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`fogrex,${keywords || ''}`} />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Kosugi+Maru&family=Quicksand&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css" />
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.2/styles/default.min.css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossOrigin="anonymous" />
        {ogp ? (
          <>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Fogrex's Portfolio" />
            <meta property="og:url" content={url || 'https://fogrex.com'} />
            <meta property="og:image" content={image || 'https://fogrex.com/fogrex_icon.jpg'} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@Faglexon" />
            <link rel="shortcut icon" href="https://fogrex.com/favicon.ico" />
            <link rel="apple-touch-icon" href="https://fogrex.com/fogrex_icon.jpg" />
          </>
        ) : ''}
      </Head>
      <NavigationBar />
      <div className="contents-outer">
        {children}
      </div>
      <Footer />
    </>
  );
};
export default App;
