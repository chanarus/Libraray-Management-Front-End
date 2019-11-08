import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import Head from '../layouts/Head';
import { initStore } from '../store/store';

export default withRedux(initStore)(
  class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}
      };
    }

    render() {
      const { Component, pageProps, store } = this.props;
      return (
        <>
          <Head />
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </>
      );
    }
  }
);
