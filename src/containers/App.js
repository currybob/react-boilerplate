import React, { Component } from 'react';
import { theme, ThemeProvider } from 'styledComponents';
import { Login } from 'components';
import { GlobalStyle } from 'styles';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Login />
        </>
      </ThemeProvider>
    );
  }
}

export default App;
