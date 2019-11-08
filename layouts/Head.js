import React from 'react';
import NextHead from 'next/head';

import GlobalStyles from '../styles/global';

const Head = props => (
  <NextHead>
    <meta charSet='UTF-8' />
    <title>{''}</title>
    <meta name='description' content={props.description} />
    <meta
      name='viewport'
      content='width=device-width, initial-scale=1, minimum-scale=1'
    />
    <link rel='icon' href='/static/favicon.ico' />
    <link
      href='https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700'
      rel='stylesheet'
    />
    <GlobalStyles />
  </NextHead>
);

export default Head;
