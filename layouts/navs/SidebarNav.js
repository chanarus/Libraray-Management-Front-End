import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeSidebar } from '../../store/store';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import CloseBlueIcon from '../../static/icons/close_blue.svg';

class SidebarNav extends React.Component {
  state = {
    active: false,
    loading: true
  };

  componentDidMount = async () => {
    this.setState({
      loading: false
    });
  };

  render() {
    const { loading, user } = this.state;

    return loading ? (
      ''
    ) : (
      <SidebarNavContainer>
        <TitleCloseWrapper>
          <Title>Settings</Title>
          <CloseBlueIcon
            onClick={() => {
              this.props.closeSidebar();
            }}
          />
        </TitleCloseWrapper>
        <Link href='/settings/rules'>
          <NavItem>Shipping Rules</NavItem>
        </Link>
      </SidebarNavContainer>
    );
  }
}

const mapStateToProps = state => ({
  active: state.sidebar
});

const mapDispatchToProps = dispatch => ({
  closeSidebar: bindActionCreators(closeSidebar, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidebarNav);

const SidebarNavContainer = styled.div`
  margin: auto 0 0 0;
  padding: 20px;
  border-bottom: 1px solid #d8e2f1;
`;

const TitleCloseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;

  svg {
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const Title = styled.span`
  color: #696969;
  display: block;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  text-align: left;
  margin: 0 0 25px 0;

  span {
    display: block;
    text-transform: lowercase;
  }
`;

const NavItem = styled.a`
  cursor: pointer;
  display: block;
  font-size: 14px;
  font-weight: 400;
  padding: 0 0 0 0;
  width: 100%;

  ${props =>
    props.active &&
    css`
      color: #83a3d7;
    `}
`;

const UserNavList = styled.ul`
  color: #222;
  list-style: none;

  li {
    cursor: pointer;
    text-align: left;
    width: 100px;
  }
`;
