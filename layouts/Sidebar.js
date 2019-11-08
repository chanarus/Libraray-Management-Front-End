import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled, { css } from 'styled-components';
import propTypes from 'prop-types';
import { Colors } from '../styles/global';
import { toggleSidebar, closeSidebar } from '../store/store';
import SidebarNav from './navs/SidebarNav';
import POBlueIcon from '../static/icons/dollar_list_blue.svg';
import POBlackIcon from '../static/icons/dollar_list_black.svg';

const navItems = [
  {
    url: 'library',
    label: 'Library',
    icon: <POBlueIcon />,
    selectedIcon: <POBlackIcon />
  }
];

class Sidebar extends React.Component {
  state = {
    activeItem: 'orders',
    currentPoUrl: '',
    currentSupUrl: '',
    currentWarehouseUrl: '',
    currentAtpUrl: '',
    currentReveiveUrl: ''
  };

  setAtiveItem = activeItem => {
    this.setState({
      activeItem
    });
    const { toggleSidebar, closeSidebar } = this.props;
    if (activeItem === 'settings') {
      toggleSidebar();
    } else {
      closeSidebar();
    }
  };

  render() {
    const { active } = this.props;

    return (
      <SidebarContainer>
        <SidebarLeft>
          {navItems.map((item, index) => (
            <Item
              key={index}
              onClick={() => this.setAtiveItem(item.url)}
              href={`${window.location.origin}/${item.url}`}
            >
              <ItemWrapper>
                {item.selectedIcon}
                <ItemLabel>{item.label}</ItemLabel>
              </ItemWrapper>
            </Item>
          ))}
        </SidebarLeft>

        <SidebarRight active={active}>
          <SidebarRightInner>
            <SidebarNav />
          </SidebarRightInner>
        </SidebarRight>
      </SidebarContainer>
    );
  }
}

const mapStateToProps = state => ({
  active: state.sidebar
});

const mapDispatchToProps = dispatch => ({
  toggleSidebar: bindActionCreators(toggleSidebar, dispatch),
  closeSidebar: bindActionCreators(closeSidebar, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

Sidebar.propTypes = {
  active: propTypes.bool.isRequired,
  toggleSidebar: propTypes.func.isRequired
};

const SidebarContainer = styled.div`
  display: flex;
  width: 76px;
  max-width: 30%;
`;

const SidebarLeft = styled.div`
  align-items: center;
  //border-right: 1px solid #f5f5f5;
  color: #fff;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px 0;
  height: 100vh;
  width: 74px;
  //overflow-x: auto;
`;
const ItemWrapper = styled.div`
  width: 74px;
`;
const SelectedItemWrapper = styled.div`
  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 2px;
    background-color: #83a3d7;
    height: 100%;
  }
`;

const Item = styled.a`
  margin-bottom: 26px;
  position: relative;
  width: 100%;
  display: block;
  transition: 0.2s ease-in;

  svg {
    cursor: pointer;
    margin: 0 auto;
    width: auto;
    height: auto;
    transition: 0.2s ease-in;
    max-width: 20px;
  }

  span {
    display: block;
    font-style: normal;
    font-size: 10px;
    line-height: 12px;
    text-align: center;
    cursor: pointer;
    padding-top: 3px;
  }

  &:hover {
    color: ${Colors.greyish_blue};

    path {
      fill: ${Colors.greyish_blue};
      // stroke: ${Colors.greyish_blue};
    }
  }
`;

const ItemLabel = styled.span``;

const SidebarRight = styled.div`
  background: #f4f6f9;
  border: 1px solid #cacaca;
  border-top: 0;
  padding: 0;
  width: 0;
  overflow: hidden;
  transition: all 0.2s ease-in-out;

  ${props =>
    props.active &&
    css`
      width: 272px;
    `}
`;

const SidebarRightInner = styled.div`
  width: 275px;
`;
