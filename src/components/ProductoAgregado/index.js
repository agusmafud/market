import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';
const styles = () => ({        
    cta: {
        fontSize:16, 
        margin: 0, 
        padding: 0, 
        color:'white'
    }
});

const ProductoAgregado = ({ classes, unidades, monto, mensaje, show, onCarritoClick, onClose }) => {
    return (
        <Snackbar                
            open={show}
            autoHideDuration={4000}
            onClose={onClose}            
            ContentProps={{
                'aria-describedby': 'aria-label',
            }}
            message={
                <div>
                    <Typography variant="body2" align="left" color='primary' id="aria-label">  
                        {mensaje}
                    </Typography>
                    <Typography variant="caption" align="left" color='primary'>                  
                        {`Total: ${unidades} bombones ($${monto})`}
                    </Typography>                        
                </div>                    
            }
            action={                    
                unidades > 0 &&
                <Button size="small" onClick={onCarritoClick} className={classes.cta}>
                    Ver carrito
                </Button>                                        
            }
        />
    );
};


ProductoAgregado.propTypes = {  
    classes: PropTypes.object.isRequired,
    unidades: PropTypes.number.isRequired,
    monto: PropTypes.number.isRequired,
    mensaje: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,    
    onCarritoClick: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(ProductoAgregado);