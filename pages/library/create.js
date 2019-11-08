import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import styled, { css } from 'styled-components';
import Router from 'next/router';

import Loader from '../../components/Loader';
import Page from '../../layouts/Page';
import PageWrapper from '../../layouts/PageWrapper';
import { Device } from '../../styles/global';
import Button from '../../components/Button';

import { postRequest } from '../../utils/httpServices';
import { withRouter } from 'next/router';

const Sidebar = dynamic(() => import('../../layouts/Sidebar'), {
  ssr: false
});

const Library = ({
  router: {
    query: { id }
  }
}) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: undefined,
    location: undefined,
    address: undefined,
    contactNo: undefined,
    active: true
  });

  useEffect(() => {}, []);

  const handleChange = evt => {
    const name = evt.target.name;
    const value = evt.target.value;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async evt => {
    evt.preventDefault();
    setLoading(true);
    const url = 'http://localhost:8000/library';

    const responce = await postRequest(url, formData);

    if (responce.id) {
      Router.push(`/library/library?id=${responce.id}`);
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <Page>
      <Sidebar />
      <RightContentWrapper>
        <PageWrapper>
          <PageHeader>
            <h1>Create Library</h1>
          </PageHeader>
          <form onSubmit={handleSubmit}>
            <InputField>
              <Label>Name</Label>
              <Input type='text' name='name' required onChange={handleChange} />
            </InputField>
            <InputField>
              <Label>Location</Label>
              <Input
                type='text'
                name='location'
                required
                onChange={handleChange}
              />
            </InputField>
            <InputField>
              <Label>Address</Label>
              <Input
                type='text'
                name='address'
                required
                onChange={handleChange}
              />
            </InputField>
            <InputField>
              <Label>Contact Number</Label>
              <Input
                type='text'
                name='contactNo'
                required
                onChange={handleChange}
              />
            </InputField>
            <ButtonWrapper>
              <CreateButton type='submit' onClick={handleSubmit}>
                Create Library
              </CreateButton>
            </ButtonWrapper>
          </form>
        </PageWrapper>
      </RightContentWrapper>
    </Page>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 20px;

  @media ${Device.mini_desktop_below} {
    width: 100%;
    justify-content: space-between;
  }
`;

const CreateButton = styled(Button)`
  width: 170px;
  height: 30px;
`;

const InputField = styled.div``;

const Input = styled.input`
  border-radius: 3px;
  border: 1px solid #dfdfdf;
  font-size: 14px;
  height: 35px;
  width: 100%;
  padding: 10px;

  &:focus {
    border: 1px solid #5b97ec;
    outline: 0;
  }
`;

const Label = styled.label`
  color: #909090;
  display: block;
  margin: 0 0 10px 0;
  font-size: 12px;
  line-height: 15px;
  font-weight: 600;
  text-transform: capitalize;
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
