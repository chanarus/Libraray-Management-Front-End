import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';

const SideNav = ({ items }) => {
    if(!items){
        return <div>No nav items provided</div>
    }
        
    return items.map( ({ link, name, icon }, index) => {
        return (
            <Link key={ index } href={ link }>
                <NavItem>
                    { name }
                    { icon ? icon : '' }
                </NavItem>
            </Link>
        );
    })
}

export default SideNav;


SideNav.propTypes = {
    items: PropTypes.array.isRequired,
}

const NavItem = styled.a`
    border-bottom: 1px solid #817b8f;
    color: #817b8f;
    cursor: pointer;
    display: block;
    margin: 0;
    padding: 15px 0;
    width: 100%;
`;