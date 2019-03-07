import React, { Component } from 'react';
import { styled } from 'styledComponents';

const Sdiv = styled.div`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.primaryTextColor};
`;

class Login extends Component {
  render() {
    return <Sdiv>login</Sdiv>;
  }
}

export default Login;
