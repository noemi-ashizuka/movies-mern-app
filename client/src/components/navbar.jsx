import React, { Component } from 'react';
import styled from 'styled-components';

import Logo from './logo';
import Links from './links';

const Container = styled.div.attrs({
  className: 'container',
})``

const Nav = styled.nav.attrs({
  className: 'navbar navbar-expand-lg navbar-dark bg-dark'
})`
  margin-bottom: 24px;
`

class NavBar extends Component {
  render() {
    return(
      <Container>
        <Nav>
          <Logo />
          <Links />
        </Nav>
      </Container>
    )
  }
}

  export default NavBar;