import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';
import { Colors } from '../styles/global';

const useOutsideAlerter = (ref, setActive) => {
  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
};

const Dropdown = ({ children, triggerElement, ...props }) => {
  const [active, setActive] = useState(false);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setActive);

  const dropdownHandler = () => {
    setActive(!active);
  };

  return (
    <Container>
      <DropdownButton onClick={dropdownHandler}>
        {triggerElement}
      </DropdownButton>
      <DropdownContainer active={active} {...props} ref={wrapperRef}>
        {children}
      </DropdownContainer>
    </Container>
  );
};

Dropdown.propTypes = {
  children: propTypes.node.isRequired,
  triggerElement: propTypes.node.isRequired
};

const Container = styled.div`
  align-self: center;
  //cursor: pointer;
  position: relative;
`;

const DropdownContainer = styled.div`
    position: absolute;
    background: ${Colors.white} !important;
    border: 1px solid #D8E2F1;
    box-sizing: border-box;
    box-shadow: 0 2px 4px rgba(202, 202, 202, 0.25);
    border-radius: 5px;
    padding: 10px 12px;
    font-size: 1.2rem;
    line-height: 1.5rem;
    z-index: 7;
    display: flex;
    flex-direction: column;
    
    ${props =>
      props.dropdown &&
      css`
        min-width: 150px;
        right: 0;
      `};
    
    
    ${props =>
      props.sideBar &&
      css`
        left: 130%;
        bottom: 0;
      `};
    
    > span, a {
      padding-top: 10px;
      
      &:nth-child(1) {
        padding-top: 0;
      }
    }
    
    ${props =>
      props.arrow &&
      css`
        &:after,
        .arrow_box:before {
          bottom: 100%;
          right: 20%;
          border: solid transparent;
          content: '';
          height: 0;
          width: 0;
          position: absolute;
          pointer-events: none;
        }

        &:after {
          border-color: rgba(136, 183, 213, 0);
          border-bottom-color: #ecebeb;
          border-width: 8px;
          margin-left: -8px;
        }
        &:before {
          border-color: rgba(194, 225, 245, 0);
          border-bottom-color: #ecebeb;
          border-width: 36px;
          margin-left: -36px;
        }
      `}

    ${props =>
      props.left &&
      css`
        right: auto;
        left: ${props.left};
      `}

    ${props =>
      props.right &&
      css`
        left: auto;
        right: ${props.right};
      `}

    ${props =>
      !props.active &&
      css`
        display: none;
      `}

    ${props =>
      props.dark &&
      css`
        background: #191919;

        &:before {
          border-bottom-color: #191919;
        }

        &:after {
          border-bottom-color: #191919;
        }
      `}

    ${props =>
      props.small &&
      css`
        width: 100%;
      `}
`;

const DropdownButton = styled.button`
  appearance: none;
  border: none;
  outline: none;

  ${props =>
    props.styled &&
    css`
      border: 1px solid ${Colors.greyish_blue};
      border-radius: 4px;
      font-weight: 600;
      font-size: 1.2rem;
      line-height: 1.5rem;
      text-transform: uppercase;
      color: ${Colors.greyish_blue};
    `};
`;

export default Dropdown;
