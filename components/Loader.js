import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Colors } from '../styles/global';

const Loader = () => (
  <LoaderContainer>
    <div className='cube1' />
    <div className='cube2' />
  </LoaderContainer>
);

export default Loader;

const cubemove = keyframes`
    25% { 
        transform: translateX(42px) rotate(-90deg) scale(0.5);
        -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
    } 50% { 
        transform: translateX(42px) translateY(42px) rotate(-179deg);
        -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);
    } 50.1% { 
        transform: translateX(42px) translateY(42px) rotate(-180deg);
        -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
    } 75% { 
        transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
        -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
    } 100% { 
        transform: rotate(-360deg);
        -webkit-transform: rotate(-360deg);
    }
`;

const LoaderContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .cube1,
  .cube2 {
    background-color: ${Colors.greyish_blue};
    width: 15px;
    height: 15px;
    position: absolute;
    animation: ${cubemove} 1.8s infinite ease-in-out;
  }

  .cube2 {
    animation-delay: -0.9s;
  }
`;
