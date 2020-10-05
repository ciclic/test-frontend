import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import theme from "./theme";

ReactDOM.render(

    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>,
  document.getElementById('root')
);

