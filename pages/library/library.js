import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import styled, { css } from 'styled-components';

import Loader from '../../components/Loader';
import Page from '../../layouts/Page';
import PageWrapper from '../../layouts/PageWrapper';
import { Device } from '../../styles/global';
import { getRequest } from '../../utils/httpServices';
import { withRouter } from 'next/router';

const Sidebar = dynamic(() => import('../../layouts/Sidebar'), {
  ssr: false
});

const Library = ({
  router: {
    query: { id }
  }
}) => {
  const [loading, setLoading] = useState(true);
  const [library, setLibrary] = useState({});

  useEffect(() => {
    getAllLibrary();
  }, []);

  const mapTableValues = data => {
    return data.map(library => {
      library.rowLink = `library/library?id=${library.id}`;
      return library;
    });
  };

  const getAllLibrary = async () => {
    const res = await getRequest(`http://localhost:8000/library/${id}`, null);
    setLibrary(res);
    console.log('res', res);
    setLoading(false);
  };

  return loading ? (
    <Loader />
  ) : (
    <Page>
      <Sidebar />
      <RightContentWrapper>
        <PageWrapper>
          <PageHeader>
            {Object.keys(library).length !== 0 && (
              <>
                <h1>Library: {library.name}</h1>
              </>
            )}
          </PageHeader>
          {Object.keys(library).length !== 0 && (
            <>
              <div>
                <div>
                  <b>
                    <span>Library Name: </span>
                  </b>
                  <span>{library.name}</span>
                </div>
                <div>
                  <b>
                    <span>Library Location: </span>
                  </b>
                  <span>{library.location}</span>
                </div>
                <div>
                  <b>
                    <span>Library Address: </span>
                  </b>
                  <span>{library.address}</span>
                </div>
                <div>
                  <b>
                    <span>Library Contact Number: </span>
                  </b>
                  <span>{library.contactNo}</span>
                </div>
                <div>
                  <b>
                    <span>Library Availability: </span>
                  </b>
                  <span>{library.active ? 'Active' : 'In Active'}</span>
                </div>
              </div>
            </>
          )}
        </PageWrapper>
      </RightContentWrapper>
    </Page>
  );
};

const TableWrapper = styled.div`
  > span {
    > div {
      &:nth-child(1),
      &:nth-child(2) {
        justify-content: normal;

        > div {
          //background-color: red;
          //padding-right: 20px;

          &:last-child {
            padding-right: 0;
          }
        }
      }
    }
  }
`;

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

export default withRouter(Library);
