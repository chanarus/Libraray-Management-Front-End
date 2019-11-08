import React from 'react';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';
import { Colors } from '../styles/global';

const Button = ({ children, submit, type, data, ...props }) => {
  const { Icon } = props;

  const handleClick = e => {
    e.preventDefault();
    submit(data);
  };

  return (
    <ButtonContainer {...props} {...(submit ? { onClick: handleClick } : {})}>
      {Icon && <Icon />}
      {children}
    </ButtonContainer>
  );
};

Button.propTypes = {
  children: propTypes.node.isRequired,
  submit: propTypes.func,
  data: propTypes.shape({}),
  Icon: propTypes.element,
  type: propTypes.string,
  width: propTypes.string
};

Button.defaultProps = {
  submit: null,
  data: {},
  Icon: null,
  type: 'submit',
  width: 'auto'
};

export default Button;

const ButtonContainer = styled.button`
  appearance: none;
  border: 0;
  border-radius: 4px;
  color: ${Colors.white};
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  background-color: ${Colors.greyish_blue};
  //margin: 35px 0 0 0;
  //padding: 10px 15px;
  padding: 0 15px;
  text-transform: uppercase;
  width: ${({ width }) => (width ? width : '100%')};
  height: 36px;

  > svg {
    position: relative;
    width: 20px;
    height: 20px;

    path {
      fill: ${Colors.white};
    }
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background: #d8d8d8;
    color: #949494;
    cursor: not-allowed;
  }

  &:hover {
    box-shadow: 0 3px 8px 1px rgba(131, 163, 215, 0.4);
    transition: 400ms ease-in-out;
  }

  ${props =>
    props.borderButton &&
    css`
      border: 1px solid ${Colors.greyish_blue};
      border-radius: 4px;
      background-color: ${Colors.white};
      color: ${Colors.greyish_blue};
    `};

  ${props =>
    props.greyButton &&
    css`
      background-color: ${Colors.grey_f4};
      color: ${Colors.greyish_blue};
    `};

  ${props =>
    props.smallButton &&
    css`
      height: 30px;
    `};

  ${props =>
    props.iconButton &&
    css`
      display: flex;
      align-items: center;
    `};

  ${props =>
    props.small &&
    css`
      margin: 0;
      padding: 10px 5px;
      text-transform: none;

      > svg {
        top: 2px;
        margin: 0 5px 0 0;
        width: 15px;
        height: 15px;

        path {
          fill: ${Colors.white};
        }
      }
    `}
`;
