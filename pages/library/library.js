import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import styled, { css } from 'styled-components';
import Router from 'next/router';

import Loader from '../../components/Loader';
import Page from '../../layouts/Page';
import PageWrapper from '../../layouts/PageWrapper';
import Button from '../../components/Button';
import Table from '../../components/Table';

import { Device } from '../../styles/global';
import { getRequest, deleteRequest } from '../../utils/httpServices';
import { withRouter } from 'next/router';

const Sidebar = dynamic(() => import('../../layouts/Sidebar'), {
  ssr: false
});

const staffGridRows = [
  {
    id: 1,
    title: 'Name',
    accessor: 'StaffName',
    width: '20%'
  },
  {
    id: 2,
    title: 'Employee Number',
    accessor: 'EmpNo',
    width: '20%'
  },
  {
    id: 3,
    title: 'Address',
    accessor: 'Address',
    width: '40%'
  },
  {
    id: 4,
    title: 'Join Date',
    accessor: 'JoinDate',
    width: '20%'
  }
];

const Library = ({
  router: {
    query: { id }
  }
}) => {
  const [loading, setLoading] = useState(true);
  const [library, setLibrary] = useState({});
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    getLibrary();
    getUser();
  }, []);

  const mapTableValues = data => {
    return data.map(library => {
      library.rowLink = `library/library?id=${library.id}`;
      return library;
    });
  };

  const deleteLibrary = async () => {
    const baseUrl = process.env.LIBRARY_SERVICE;
    const res = await deleteRequest(`${baseUrl}library/${id}`, null);

    if (res.id) {
      Router.push('/library');
    }
  };

  const getUser = async () => {
    const baseUrl = process.env.LIBRARY_SERVICE;
    const res = await getRequest(`${baseUrl}library/${id}/staff`, null);

    setStaff(res);
  };

  const getLibrary = async () => {
    const baseUrl = process.env.LIBRARY_SERVICE;
    const res = await getRequest(`${baseUrl}library/${id}`, null);
    setLibrary(res);
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
                <ButtonWrapper>
                  <CreateButton
                    onClick={() => {
                      Router.push(`/library/create?id=${id}`);
                    }}
                  >
                    Edit Library
                  </CreateButton>
                  <DeleteButton onClick={deleteLibrary}>
                    Delete Library
                  </DeleteButton>
                </ButtonWrapper>
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

          <h1>Staff</h1>
          {staff.length === 0 ? (
            <span>No Data Found</span>
          ) : (
            <TableWrapper>
              <Table columns={staffGridRows} data={staff} />
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

const DeleteButton = styled(Button)`
  width: 170px;
  height: 30px;
  margin-left: 20px;
  background-color: red;
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

export default withRouter(Library);
