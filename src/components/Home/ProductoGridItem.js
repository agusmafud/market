import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Fade from 'react-reveal/Fade';

const styles = theme => ({
    root: {
        position: 'relative',
        width: '100%',       
        overflow:'hidden',                 
    },  
    imagen: {
        display: 'block',
        width: '100%',
        height: 'auto',
        transition: 'transform 1s',
        '&:hover': {
            transform: 'scale(1.15)',
        },
    },
    overlay: {
        position: 'absolute',
        bottom: 0,                
        background: 'rgba(0, 0, 0, 0.5)',         
        width: '100%',                
        paddingTop: theme.spacing.unit * 1.5,  
        paddingBottom: theme.spacing.unit * 0.5,
        paddingLeft: theme.spacing.unit * 1.5,
        paddingRight: theme.spacing.unit * 1.5, 
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },
    badge: {
        width:'100%', 
        marginTop: 8,
        marginLeft:-8    
    },
    titulo: {
        color: '#fff',        
        fontSize: 21,
        margin:'0 auto',
    },
    precio: {
        color: '#fff',
        fontSize: 13,
    },
});

const ProductosGridItem = ({ classes, producto, unidades }) => {
    return (        
        <Fade duration={1000}>
            <div className={classes.root}>
                <img src={producto.imagen} alt={producto.nombre} className={classes.imagen}/>    
                                
                <div className={classes.overlay}>
                    {
                        unidades > 0 ?
                            <Badge badgeContent={<React.Fragment>x<b>{unidades}</b></React.Fragment>} color="primary" className={classes.badge}>
                                <Typography variant="h5" align="center" component="h2" className={classes.titulo}>
                                    {producto.nombre}
                                </Typography>               
                            </Badge>
                        :
                            <Typography variant="h5" align="center" component="h2" className={classes.titulo}>
                                {producto.nombre}
                            </Typography>
                    }
                    
                    <Typography variant="overline" align="center" component="p" className={classes.precio}>
                        {`$ ${producto.precio}`}
                    </Typography>
                </div>
                                
                
            </div>            
        </Fade>
    );
}

ProductosGridItem.propTypes = {
    classes: PropTypes.object.isRequired,
    producto: PropTypes.object.isRequired, 
    unidades: PropTypes.number.isRequired,   
};

export default withStyles(styles)(ProductosGridItem);