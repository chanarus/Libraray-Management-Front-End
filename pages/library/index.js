import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import styled, { css } from 'styled-components';

import Loader from '../../components/Loader';
import Page from '../../layouts/Page';
import PageWrapper from '../../layouts/PageWrapper';
import { Device } from '../../styles/global';
import { getRequest } from '../../utils/httpServices';

const Sidebar = dynamic(() => import('../../layouts/Sidebar'), {
  ssr: false
});

const index = () => {
  const [loading, setLoading] = useState(false);
  const [libraries, setLibraries] = useState({});

  useEffect(() => {
    getAllLibrary();
  }, []);

  const getAllLibrary = async () => {
    const res = await getRequest('http://localhost:8000/library', null);
    console.log('res', res);
  };

  return loading ? (
    <Loader />
  ) : (
    <Page>
      <Sidebar />
      <RightContentWrapper>
        <PageWrapper>
          <PageHeader>
            <h1>Library</h1>
          </PageHeader>
        </PageWrapper>
      </RightContentWrapper>
    </Page>
  );
};

const RightContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const PageHeader = styled.div`
  display: flex;
  display: -webkit-inline-flex;
  justify-content: space-between;
  margin-top: 35px;

  > h1 {
    margin: 0;
  }

  @media ${Device.mini_desktop_below} {
    flex-wrap: wrap;
    margin: 14px 0 20px;
  }
`;

export default index;
