import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Fade from 'react-reveal/Fade';

import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({        
    root: {                           
        height: '75vh',
        minHeight: 300,    
        marginTop: -5,                
        paddingBottom: 10,    
        /* CENTRADO VERTICAL */
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',        
        background: theme.palette.primary.main,        
    },          
    textoContainer: {                      
        width: '80%',
        minWidth: 300,
        [theme.breakpoints.up('lg')]: {
            width: '50%',
        },
        textAlign: 'center',        
    },        
        titulo: {
            fontSize: 24,
            [theme.breakpoints.up('sm')]: {
                fontSize: 30,
            },
            paddingBottom: theme.spacing.unit * 2,
        },
        bajada: {
            fontSize: 14,
            [theme.breakpoints.up('sm')]: {
                fontSize: 16,
            },
        }      
});

const Claim = ({ classes }) => {
    return (                
        <div className={classes.root}>          
            <Fade bottom cascade duration={2000}>                    
                <div className={classes.textoContainer}>    

                    <Typography variant="h4" align="center" component="h1" className={classes.titulo}>
                        CHOCOLATES MUSTAFÁ
                    </Typography>
                
                    <Typography variant="subtitle1" align="center" gutterBottom component="h2" className={classes.bajada}>
                        Desde hace milenios el chocolate es considerado un alimento y un medicamento.                         
                    </Typography>
                    <Typography variant="subtitle1" align="center" gutterBottom component="h2" className={classes.bajada}>                       
                        Elegimos recrear esta tradición con los mejores granos de cacao, seleccionados en origen y cultivados en forma respetuosa con el medio ambiente.                        
                    </Typography>
                    <Typography variant="subtitle1" align="center" paragraph component="h2" className={classes.bajada}>
                        Elaboramos un chocolate sin aditivos, con sabores y aromas naturales.                        
                    </Typography>
                    <Typography variant="subtitle2" align="center" component="h2" className={classes.bajada}>                        
                        Te invitamos a conocer nuestros productos y sentir la experiencia que comienza en las semillas y termina dentro de cada bombón y tableta.
                    </Typography>                                
            
                </div>                
            </Fade>                
        </div>                
    );
};

Claim.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Claim);