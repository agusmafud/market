import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Fade from 'react-reveal/Fade';

import RemoveIcon from '@material-ui/icons/IndeterminateCheckBoxOutlined';
import AddIcon from '@material-ui/icons/AddBoxOutlined';

import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({      
    accion: {      
        transition: 'transform 0.8s',
        '&:hover': {
            transform: 'scale(1.1)',
        },
        fontSize: 30,
        [theme.breakpoints.up('sm')]: {
            fontSize: 34,
        },        
    },
    color: {
        color: '#442c2e',
    },
    botonSumar: {
        fontSize: 16,
        letterSpacing: 1.15,
        paddingTop: 6,
        paddingBottom: 6,
        width: 150,
        borderRadius: 0,
        transition: 'transform 0.8s',
        '&:hover': {
            transform: 'scale(1.05)',
        },    
        [theme.breakpoints.up('sm')]: {
            paddingTop: 12,
            paddingBottom: 12,
        },        
    }
});
  
class ContadorProducto extends React.Component {      
        
    render() {
      const { classes, producto, unidades, nuevaCantidad, onIncrementarCantidad, onDecrementarCantidad, onFijarUnidades } = this.props;
  
      return (
        <Grid container direction="row" justify="center" alignItems="center">

            <Grid container direction="row" justify="flex-end" alignItems="center" item xs>
                <Grid item >
                    <Tooltip title={`Restar ${producto.nombre}`}>
                        <IconButton 
                            onClick={onDecrementarCantidad}
                            className={classes.color} aria-label={`Restar ${producto.nombre}`}
                        >
                            <RemoveIcon className={classes.accion}/>
                        </IconButton>
                    </Tooltip>
                </Grid>
                <Grid item >
                    <Typography align="center" className={classes.color} variant="h6">
                        <b>{nuevaCantidad}</b>
                    </Typography>
                </Grid>
                <Grid item >
                    <Tooltip title={`Sumar ${producto.nombre}`}>
                        <IconButton 
                            onClick={onIncrementarCantidad}
                            className={classes.color} aria-label={`Sumar ${producto.nombre}`}
                        >
                        <AddIcon className={classes.accion}/>
                        </IconButton>
                    </Tooltip>
                </Grid>                
            </Grid>    

            
                <Grid item xs>
                { (unidades !== nuevaCantidad) &&
                    <Fade>
                        <Button onClick={() => onFijarUnidades(producto,nuevaCantidad, unidades)} color="primary" variant='contained' className={classes.botonSumar}>
                            {
                                unidades === 0 ?
                                'Agregar'
                                :
                                'Actualizar'
                            }                                                
                        </Button>                        
                    </Fade>
                }
                </Grid>
            
            

        </Grid>
      );
    }
}

ContadorProducto.propTypes = {
    classes: PropTypes.object.isRequired,
    producto: PropTypes.object.isRequired,
    unidades: PropTypes.number.isRequired,
    nuevaCantidad: PropTypes.number.isRequired,
    onIncrementarCantidad: PropTypes.func.isRequired,
    onDecrementarCantidad: PropTypes.func.isRequired,
    onFijarUnidades: PropTypes.func.isRequired,
};
  
export default withStyles(styles)(ContadorProducto);