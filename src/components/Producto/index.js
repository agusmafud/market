import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import Fade from 'react-reveal/Fade';

import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import BackIcon from '@material-ui/icons/ArrowBackRounded';

import ContadorProducto from './ContadorProducto';

const styles = theme => ({  
  dialog: {
    width: '90%',    
    margin: '0 auto',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,    
    zIndex: 999,
  },  
  gridContainer: {
    margin:0, 
    paddingTop: 20
  },
  gridDesktop: {
    paddingLeft: theme.spacing.unit * 2, 
    paddingRight: theme.spacing.unit * 3
  },
  gridMobile: {
    marginTop: theme.spacing.unit * 2, 
    paddingLeft: theme.spacing.unit * 2, 
    paddingRight:theme.spacing.unit * 2
  },
  imagenContainer:{    
    overflow: 'hidden',
    textAlign: 'center',
  },
  imagen: {    
    width: '100%',
    borderRadius: 4,    
    boxShadow: theme.shadows[2],
    maxWidth: 400,
    maxHeight: 360,
    objectFit: 'cover',            
  },
  volverHeader: {
    margin: 0, 
    padding: theme.spacing.unit * 0.5,
  },
  volverTexto: {
    color:'#442c2e',
    fontSize: 12,    
  },
  volverIcono: {
    color:'#442c2e',
    fontSize: 12,
    marginRight: theme.spacing.unit,
  },  
  interlineado: {
    margin: `0 ${theme.spacing.unit * 2}px`
  }

});

class Producto extends React.Component {  

  handleClose = () => {
    this.props.handleBackClick();
  };

  render() {
    const { classes, producto, unidades, nuevaCantidad, onIncrementarCantidad, onDecrementarCantidad, onFijarUnidades } = this.props;

    return (
      <Dialog
        open
        onClose={this.handleClose}
        scroll='paper'
        fullScreen
        aria-labelledby="aria-title"
        className={classes.dialog}        
      >          
        
        <DialogTitle disableTypography className={classes.volverHeader}>
          <Button color="secondary" className={classes.volverTexto} onClick={this.handleClose}>
            <BackIcon onClick={this.handleClose} fontSize="small" className={classes.volverIcono} />
              Volver
          </Button>
        </DialogTitle>
        
        <DialogContent>

          <Grid container spacing={16} alignItems='center' className={classes.gridContainer} >             
            <Hidden only={['xs', 'sm']}>
              <Grid container direction='column' item xs={12} md={6} className={classes.gridDesktop} >                  
                  <Typography variant="overline" align="center" component="h1" id="aria-title">
                    Chocolates Mustafá
                  </Typography>
                  <Typography variant="h5" align="center" component="h2">
                    {producto.nombre}
                  </Typography>               
                  <Typography variant="overline" align="center" paragraph component="p">
                    {`$ ${producto.precio}`}
                  </Typography>                
                  <Typography variant="body1" align="left" style={{marginTop: 16}} paragraph>
                    {producto.descripcion}
                  </Typography>
                  <Typography variant="subtitle2" align="left" gutterBottom>
                    Ingredientes
                  </Typography>
                  <Typography variant="body1" align="left" paragraph>
                    Chocolate con leche, chocoate semiamargo, crema, miel, manteca de cacao.                    
                  </Typography>                   
                  <Typography variant="body1" align="left" className={classes.interlineado}>                  
                    <i>{producto.descripcionBreve}</i>
                  </Typography>                  
              </Grid>
            </Hidden>              
            
            <Grid container direction='column' item xs={12} md={6}>
              <Grid item className={classes.imagenContainer}>
                <Fade>
                  <img src={producto.imagen} alt={'titulo'} className={classes.imagen}/>
                </Fade>
              </Grid>
              <Hidden mdUp>
                <Grid item className={classes.gridMobile} >
                  <Typography variant="overline" align="center" component="h1" id="aria-title">
                    Chocolates Mustafá
                  </Typography>                  
                  <Typography variant="h5" align="center" component="h2">
                    {producto.nombre}
                  </Typography>               
                  <Typography variant="overline" align="center" paragraph component="p">
                    {`$ ${producto.precio}`}
                  </Typography>
                  <Typography variant="body1" align="left" style={{marginTop: 16}} paragraph>
                    {producto.descripcion}
                  </Typography>
                  <Typography variant="subtitle2" align="left" gutterBottom>
                    Ingredientes
                  </Typography>
                  <Typography variant="body1" align="left" paragraph>
                    Chocolate con leche, chocoate semiamargo, crema, miel, manteca de cacao.                    
                  </Typography>                  
                  <Typography variant="body1" align="left" >                  
                    <i>{producto.descripcionBreve}</i>
                  </Typography>
                </Grid>
              </Hidden>                              
            </Grid>              
          </Grid>
          
        </DialogContent>
      
        <DialogActions>          
          <ContadorProducto 
            producto={producto}
            unidades={unidades}
            nuevaCantidad={nuevaCantidad}
            onIncrementarCantidad={onIncrementarCantidad}
            onDecrementarCantidad={onDecrementarCantidad}
            onFijarUnidades={onFijarUnidades}            
          />              
        </DialogActions>
      
      </Dialog>      
    );
  }
}

Producto.propTypes = {
  classes: PropTypes.object.isRequired,  
  producto: PropTypes.object.isRequired,
  unidades: PropTypes.number.isRequired,
  nuevaCantidad: PropTypes.number.isRequired,
  onIncrementarCantidad: PropTypes.func.isRequired,
  onDecrementarCantidad: PropTypes.func.isRequired,
  onFijarUnidades: PropTypes.func.isRequired, 
  handleBackClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(Producto);