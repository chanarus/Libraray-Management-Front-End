import styled, { css } from 'styled-components';
import { Colors } from '@sprii-dashboards/common/src/styles/global';

export const Label = styled.label`
  color: ${Colors.grey_90};
  display: block;
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 15px;
  margin: 20px 0 10px 0;
  text-transform: capitalize;
  width: 100%;

  ${props =>
    props.required &&
    css`
      &:after {
        content: ' *';
        padding-left: 4px;
      }
    `};
`;