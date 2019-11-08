import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import Link from 'next/link';
import propTypes from 'prop-types';
import SortCarrotDown from '../static/icons/polygon_down.svg';
import { Colors, DesktopBelow, Device } from '../styles/global';

const Table = ({ columns, data, small, sections, nohead }) => (
  <TableContainer columncount={columns.length} small={small}>
    <TableHead small={small} nohead={nohead}>
      {columns.map(column => (
        <TableHeadCell key={column.id} width={column.width} small={small}>
          {column.title}
          {column.sorting && <SortCarrotDown />}
        </TableHeadCell>
      ))}
    </TableHead>
    <TableBody>
      {data &&
        !sections &&
        data.map(row => (
          <TableRow key={row.id} className='row' small={small}>
            {columns.map(column =>
              row.rowLink && column.title !== '' ? (
                <Link key={column.id} href={row.rowLink}>
                  <TableCell width={column.width} small={small}>
                    {row[column.accessor]}
                  </TableCell>
                </Link>
              ) : (
                <TableCell key={column.id} width={column.width} small={small}>
                  {row[column.accessor]}
                </TableCell>
              )
            )}
          </TableRow>
        ))}
      {data &&
        sections &&
        data.map(row => {
          const sectionData = data.filter(
            row => row[section.accessor] === section.name
          );

          <MergedHeader>{section.label}</MergedHeader>;

          sectionData.map(row => (
            <TableRow key={row.id} className='row' small={small}>
              {columns.map(column =>
                row.rowLink && column.title !== '' ? (
                  <Link key={column.id} href={row.rowLink}>
                    <TableCell width={column.width} small={small}>
                      {row[column.accessor]}
                    </TableCell>
                  </Link>
                ) : (
                  <TableCell key={column.id} width={column.width} small={small}>
                    {row[column.accessor]}
                  </TableCell>
                )
              )}
            </TableRow>
          ));
        })}
    </TableBody>
  </TableContainer>
);

Table.propTypes = {
  columns: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
      title: propTypes.string,
      accessor: propTypes.string.isRequired,
      width: propTypes.string
    })
  ),
  data: propTypes.arrayOf(propTypes.object),
  small: propTypes.bool
};

Table.defaultProps = {
  columns: [],
  data: [],
  small: false
};

export default Table;

const TableContainer = styled.span``;

const TableHead = styled.div`
  padding: 10px 0 15px;
  border-bottom: 1px solid ${Colors.grey_90};;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  color: ${Colors.grey_90};
  display: flex;
  justify-content: space-between;

  ${props =>
    props.small &&
    css`
      font-size: 1rem;
      padding: 5px 0;
    `}

    ${props =>
      props.width &&
      css`
        width: ${props.width};
      `}

    ${props =>
      props.nohead &&
      css`
        display: none;
      `}
    
    > div {
      &:nth-child(1) {
        padding-left: 0;
      }
    }
`;

const TableHeadCell = styled.div`
  align-items: center;
  word-break: break-word;
  padding-left: 10px;

  > div {
    padding-left: 1.5%;
  }

  ${props =>
    props.small &&
    css`
      //padding: 5px;
    `}

  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}
  
  @media ${Device.mini_desktop_below} {
    
  }
`;

const MergedHeader = styled.div`
  background: #f9fbff;
  width: 100%;
`;

const TableBody = styled.div``;

const BorderAnimation = keyframes`
  0% {
      width: 0;
  }
  
  100% {
    width: 100%;
  }
`;

const TableRow = styled.div`
  cursor: pointer;
  padding: 20px 0;
  transition: all 0.2s ease-in-out;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &:before {
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${Colors.grey_CA};
    position: absolute;
    bottom: 0;
  }

  ${props =>
    props.small &&
    css`
      padding: 10px 0;
    `}

  &:hover {
    &:after {
      content: '';
      background-color: ${Colors.greyish_blue};
      position: absolute;
      bottom: 0;
      animation: ${BorderAnimation} 400ms ease-in-out;
      pointer-events: none;

      //  As background
      height: 100%;
      left: -90px;
      right: -90px;
      opacity: 0.08;

      @media ${DesktopBelow} {
        left: -30px;
        right: -30px;
      }
    }
  }

  > div {
    &:nth-child(1) {
      padding-left: 0;
    }
  }
`;

const TableCell = styled(TableHeadCell)`
  position: relative;
  padding-left: 10px;

  ${props =>
    props.small &&
    css`
      font-size: 11px;
    `}

  ${props =>
    props.width &&
    css`
      width: ${props.width};
    `}
  
  @media ${Device.mini_desktop_below} {
    
  }
`;
