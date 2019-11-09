import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import styled, { css } from 'styled-components';
import Router from 'next/router';

import Loader from '../../components/Loader';
import Page from '../../layouts/Page';
import PageWrapper from '../../layouts/PageWrapper';
import Table from '../../components/Table';
import Button from '../../components/Button';

import { Device } from '../../styles/global';
import { getRequest } from '../../utils/httpServices';

const Sidebar = dynamic(() => import('../../layouts/Sidebar'), {
  ssr: false
});

const librariesGridRows = [
  {
    id: 1,
    title: 'Name',
    accessor: 'name',
    width: '20%'
  },
  {
    id: 2,
    title: 'Location',
    accessor: 'location',
    width: '20%'
  },
  {
    id: 3,
    title: 'Address',
    accessor: 'address',
    width: '40%'
  },
  {
    id: 4,
    title: 'Contact No',
    accessor: 'contactNo',
    width: '20%'
  }
];

const index = () => {
  const [loading, setLoading] = useState(true);
  const [libraries, setLibraries] = useState([]);

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
    const baseUrl = process.env.LIBRARY_SERVICE;
    const res = await getRequest(`${baseUrl}activelibrary`, null);
    const mapedData = mapTableValues(res);
    setLibraries(mapedData);
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
            <h1>Library</h1>

            <ButtonWrapper>
              <CreateButton
                onClick={() => {
                  Router.push('/library/create');
                }}
              >
                Create Library
              </CreateButton>
            </ButtonWrapper>
          </PageHeader>
          {libraries.length === 0 ? (
            <span>No Data Found</span>
          ) : (
            <TableWrapper>
              <Table columns={librariesGridRows} data={libraries} />
            </TableWrapper>
          )}
        </PageWrapper>
      </RightContentWrapper>
    </Page>
  );
};

const ButtonWrapper = styled.div`
  display: flex;

  @media ${Device.mini_desktop_below} {
    width: 100%;
    justify-content: space-between;
  }

  div {
    &:nth-child(1) {
      margin-right: 20px;
    }
  }
`;

const CreateButton = styled(Button)`
  width: 170px;
  height: 30px;
  margin-left: 20px;
`;

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

export default index;
