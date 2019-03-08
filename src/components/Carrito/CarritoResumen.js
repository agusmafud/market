import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';
const styles = () => ({  
    root: {
        textAlign: 'center',
    },
    subtotal: {
        marginTop: 30,
        marginBottom: 10,
    },
    cta: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 10,
        marginBottom: 50,
    }
});

const CarritoResumen = ({ classes, subtotal, onCheckoutClick }) => {
    return (        
        <div className={classes.root}>
            <Typography variant="h6" align="center" className={classes.subtotal}>                  
                Subtotal: <b>{`$${subtotal}`}</b>
            </Typography>
            <Typography variant="caption" align="center" >                  
                Podrás ingresar los datos de envío en el siguiente paso
            </Typography>
            <Button size='large' onClick={onCheckoutClick} color="primary" variant='contained' className={classes.cta}>
                Ir al checkout                                                
            </Button>
        </div>
    );
};

CarritoResumen.propTypes = {
    classes: PropTypes.object.isRequired,
    subtotal: PropTypes.number.isRequired,
    onCheckoutClick: PropTypes.func.isRequired,
};
export default withStyles(styles)(CarritoResumen);