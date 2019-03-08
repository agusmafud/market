import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Badge from '@material-ui/core/Badge';

import img from '../../images/logo.png';
import carrito from '../../images/logo.svg';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Bounce from 'react-reveal/Bounce';

const styles = theme => ({        
    root: {                           
        height: 60,
        width: '100%',
        zIndex: 999,        
        background: theme.palette.primary.main,        
        overflow: 'hidden',        
    },    
    logo: {        
        width: 38,     
        verticalAlign: 'middle'           
    },
    logoSeleccionable: {        
        width: 38,        
        verticalAlign: 'middle',
        cursor: 'pointer',
        transition: 'transform 0.3s',
        '&:hover': {
            transform: 'scale(1.25)',
        },
    },
    carrito: {
        width: 40,
        height: 32,
        marginRight: theme.spacing.unit * 4,        
    },
    carritoSeleccionable: {
        width: 40,
        height: 32,
        marginRight: theme.spacing.unit * 4,
        transition: 'transform 0.3s',
        '&:hover': {
            transform: 'scale(1.25)',
        },
        cursor: 'pointer',
    },
    badge: {
        top: -2,
        right: 25,
        border: '2px solid',
        borderColor: 'rgba(0, 0, 0, 0.87)',        
    },
    badgeSeleccionable: {
        top: -2,
        right: 25,
        border: '2px solid',
        borderColor: 'rgba(0, 0, 0, 0.87)',
        cursor: 'pointer',
    },
    dialogContent: {        
        minHeight: '35vh', 
        display:'flex', 
        alignItems:'center'
    },
    dialogContentText: {
        paddingLeft: 0, 
        paddingRight: 0, 
        marginTop: 16,         
        textAlign:'center', 
        fontSize: 19, 
        lineHeight: 1.6,
        [theme.breakpoints.up('sm')]: {
            fontSize: 24,
            lineHeight: 1.8,
            paddingLeft: 16, 
            paddingRight: 16,
        },
    },
    dialogActions: {
        marginLeft:'auto', 
        marginRight:'auto', 
        marginBottom: 16
    },
    dialogButton: {
        fontSize: 13,
        padding: '10px 10px',
        [theme.breakpoints.up('sm')]: {
            fontSize: 14,
            padding: '14px 18px',          
        },
    }
});

class Header extends React.Component {
    state = {
        open: false,
    };
  
    handleClickOpen = () => {
        this.setState({ open: true });
    };
  
    handleClose = () => {
        this.setState({ open: false });
    };
  
    render() {
        const { classes, handleHomeClick, handleCarritoClick, unidades, 
            fixed, homeSeleccionable, exitConfirmation, carritoVisible, carritoSeleccionable } = this.props;
        return (
            <React.Fragment>
        
                <Paper square className={classes.root} style={{ position: fixed ? 'fixed' : 'static' }} >
                    <Grid container alignItems='center' style={{height: 60}}>
                        <Grid item xs>

                        </Grid>

                        <Grid item xs={6} style={{textAlign: 'center'}}>
                            <img 
                                onClick={exitConfirmation && (unidades > 0) ? this.handleClickOpen : handleHomeClick} 
                                className={ homeSeleccionable ? classes.logoSeleccionable : classes.logo }
                                src={img} alt="Mustafá Chocolates" 
                            />
                        </Grid>
                        
                        <Grid item xs style={{textAlign: 'right'}}>   
                            {
                                carritoVisible &&
                                <React.Fragment>
                                    { unidades > 0 ?
                                        <Bounce spy={!carritoSeleccionable} appear={carritoSeleccionable}>
                                            <Badge 
                                                onClick={handleCarritoClick}                            
                                                badgeContent={<b>{unidades}</b>}                 
                                                color="secondary" classes={{ badge: carritoSeleccionable ? classes.badgeSeleccionable : classes.badge}}
                                            >
                                                <img 
                                                    onClick={handleCarritoClick} 
                                                    className={ carritoSeleccionable ? classes.carritoSeleccionable : classes.carrito }
                                                    src={carrito} alt={"Carrito"}
                                                />             
                                            </Badge>
                                        </Bounce>
                                    :
                                        <img 
                                            onClick={handleCarritoClick} 
                                            className={ carritoSeleccionable ? classes.carritoSeleccionable : classes.carrito }
                                            src={carrito} alt={"Carrito"}
                                        />             
                                    }
                                </React.Fragment>
                            }                                                                 
                        </Grid>
                    </Grid>     
                </Paper>

                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"                                
                >
                    
                    <DialogContent className={classes.dialogContent}>
                        <DialogContentText 
                            id="alert-dialog-description" 
                            className={classes.dialogContentText}                            
                        >                        
                            ¿Seguro que querés volver a la página principal y abandonar tu compra?                        
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions className={classes.dialogActions}>
                        <Button onClick={handleHomeClick} size='small' className={classes.dialogButton} >
                            <Hidden smUp>
                                Volver 
                                <br />
                                atrás
                            </Hidden>
                            <Hidden only='xs'>
                                Volver atrás
                            </Hidden>                            
                        </Button>
                        <Button onClick={this.handleClose} variant='contained' color='primary' size='small' autoFocus className={classes.dialogButton}>
                            <Hidden smUp>
                                Continuar 
                                <br />
                                compra
                            </Hidden>
                            <Hidden only='xs'>
                                Continuar compra
                            </Hidden>                            
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>           
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    handleHomeClick: PropTypes.func,
    handleCarritoClick: PropTypes.func,
    unidades: PropTypes.number.isRequired,
    fixed: PropTypes.bool.isRequired,
    homeSeleccionable: PropTypes.bool.isRequired,
    exitConfirmation: PropTypes.bool.isRequired,
    carritoVisible: PropTypes.bool.isRequired,
    carritoSeleccionable: PropTypes.bool.isRequired,    
};

export default withStyles(styles)(Header);