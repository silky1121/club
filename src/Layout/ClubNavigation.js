import React, { Component } from 'react';
import styled from 'styled-components';

class ClubNavigation extends Component {
  render()  {
    return (
      <Nav>
        <NavList>
          <NavItem>홈</NavItem>
          <NavItem>재등록</NavItem>
        </NavList>
      </Nav>
    );
  }
}

export default ClubNavigation;

const Nav = styled.div`
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #d1d8e4;
`

const NavList = styled.div`
  width: 1080px;
  display: flex;
  margin: 0 auto;
`

const NavItem = styled.div`
  width: 60px;
  margin-left: 18px;
  margin-top: 5px;
  display: flex;
`