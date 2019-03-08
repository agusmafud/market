import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Helmet } from "react-helmet";

import HomeContainer from './containers/HomeContainer';
import CarritoContainer from './containers/CarritoContainer';
import CheckoutContainer from './containers/CheckoutContainer';
import ProductoContainer from './containers/ProductoContainer';
import GraciasContainer from './containers/GraciasContainer';
import ProductoAgregadoContainer from './containers/ProductoAgregadoContainer';


const theme = createMuiTheme({
  palette: {
    primary: {      
      main: '#fedbd0',      
      contrastText: '#442c2e',
    },
    secondary: {      
      main: '#feeae6',      
    },
    typography: {
      useNextVariants: true,
    },
  },
});

class MarketApp extends Component {

  render() {
    return (
      <MuiThemeProvider theme={theme}>   
        
        <Helmet>          
          <title>Market App</title>                    
        </Helmet>   
        
        <CssBaseline />
        
        <Switch>          
          <Route path="/carrito" component={CarritoContainer} />
          <Route path="/checkout" component={CheckoutContainer} />                    
          <Route path="/" component={HomeContainer} />
        </Switch>
        
        <Route path="/producto/:id" component={ProductoContainer} />
        <Route path="/gracias/:id" component={GraciasContainer} />
        <Route component={ProductoAgregadoContainer} />

      </MuiThemeProvider>
    );
  }
}

export default MarketApp;
