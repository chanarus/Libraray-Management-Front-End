import React from 'react';
import styled from 'styled-components';

const Page = ({ children }) => <PageContainer>{children}</PageContainer>;

export default Page;

const PageContainer = styled.main`
  display: flex;
  width: 100%;
`;
