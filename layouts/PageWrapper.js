import React from 'react';
import styled from 'styled-components';
import { DesktopBelow, Theme } from '../styles/global';

const PageWrapper = ({ children }) => (
  <PageWrapperContainer> {children} </PageWrapperContainer>
);

export default PageWrapper;

const PageWrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 90px 40px;
  //height: 100vh;
  height: calc(100vh - 66px); //Remove this when all the pages got the search bar
  width: 100%;
  overflow: hidden;
  overflow-y: scroll;

  @media ${DesktopBelow} {
    padding: 0 30px 30px;
    overflow: scroll;
    // width: 100vw;

    > span {
      display: block;
      width: 100%;
      //min-width: ${Theme.full_width};
      min-width: calc(100% - 136px);
      //padding-right: 106px;
    }
  }
`;
