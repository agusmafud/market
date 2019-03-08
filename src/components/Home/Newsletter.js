import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fade from 'react-reveal/Fade';
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';

import logo from '../../images/logo.png';
import facebook from '../../images/facebook.svg';
import instagram from '../../images/instagram.svg';

import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({        
    root: {
        background: theme.palette.primary.main,        
        height: '100%',
        minHeight: 300,
        padding: theme.spacing.unit * 4,
        paddingRight: theme.spacing.unit,
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing.unit * 4,
            paddingRight: theme.spacing.unit * 4,
        },
    },
    logo: {    
        width: 72,
        marginRight: theme.spacing.unit * 4,
        [theme.breakpoints.up('sm')]: {
            marginRight: theme.spacing.unit * 10,
        },
    },
    red: {
        height: 20,
        marginRight: theme.spacing.unit * 2,
    },
    tituloNews: {
        fontSize: 16,
    },
    submit: {        
        marginBottom: theme.spacing.unit * 1.5,
    },
    fullHeight: {
        height:'100%',
    }
});

const Newsletter = ({ classes, newsletter, handleNuevoNewsletter }) => {
    return (
        <Fade duration={1000}>
            <div className={classes.root}>              
                <Grid container direction='column' justify='flex-start' className={classes.fullHeight}>
                
                    <Grid container item xs alignItems='flex-start'>
                        <Grid item>
                            <img src={logo} alt={"Mustafá Chocolates"} className={classes.logo}/>
                        </Grid>
                        {
                            newsletter === '' ?
                                <Grid item xs>
                                    
                                    <Typography variant="body1" align="left" color="textPrimary" component="p" className={classes.tituloNews}>
                                        SUSCRIBITE A NUESTRO NEWSLETTER
                                    </Typography>

                                    <Formik
                                        initialValues={{ formNewsletter: ''}}
                                        validate={values => {
                                            let errors = {};
                                            if (!values.formNewsletter) {
                                            errors.formNewsletter = 'Ingresá una dirección de correo electrónico para suscribirte';
                                            } else if (
                                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.formNewsletter)
                                            ) {
                                            errors.formNewsletter = 'Dirección de correo electrónica incorrecta';
                                            }
                                            return errors;
                                        }}
                                        onSubmit={(values, { setSubmitting }) => {
                                            handleNuevoNewsletter(values.formNewsletter);
                                            setSubmitting(false);                                                
                                        }}
                                    >
                                        {({                                                
                                            handleSubmit,
                                            isSubmitting,                                            
                                        }) => (
                                            <Form>
                                                <Grid container alignItems='flex-end'>
                                                    <Grid item xs={12} sm={10}>
                                                        <Field 
                                                            onKeyPress={ (e) => { if (e.key === 'Enter') {handleSubmit()} }}
                                                            fullWidth type="email" component={TextField} name="formNewsletter" 
                                                            label="Tu dirección de email"
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} sm={2}>
                                                        <Button type='submit' disabled={isSubmitting}                                                        
                                                            size='small' fullWidth className={classes.submit}
                                                        >
                                                            OK
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </Form>
                                        )}
                                    </Formik>
                                    
                                </Grid>
                            :
                                <Grid item xs>
                                    <Typography variant="subtitle1" align="left" color="textPrimary" component="p" gutterBottom>
                                        <b>Gracias</b> por suscribirte, {newsletter}.                                        
                                    </Typography>
                                    <Typography variant="overline" align="left" color="textPrimary" style={{fontSize:12}}>
                                        Te informaremos de nuestras novedades y productos de temporada.
                                    </Typography>
                                </Grid>
                        }
                        
                    </Grid>

                    <Grid container item alignItems='flex-start'>
                        <Grid item>
                            <img src={facebook} alt={"Mustafá Chocolates"} className={classes.red}/>                           
                        </Grid>
                        <Grid item>
                            <img src={instagram} alt={"Mustafá Chocolates"} className={classes.red}/>
                        </Grid>                    
                        <Grid item xs>
                            <Typography variant="caption" align="right" color="textPrimary" component="p">
                                Copyright © 2019, Mustafá Chocolates.
                            </Typography>                  
                        </Grid>
                    </Grid>

                </Grid>
            </div>
        </Fade>
    );
};

Newsletter.propTypes = {
    classes: PropTypes.object.isRequired,
    newsletter: PropTypes.string.isRequired,
    handleNuevoNewsletter: PropTypes.func.isRequired,
};

export default withStyles(styles)(Newsletter);