import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import SwipeableViews from 'react-swipeable-views';

import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

import BackIcon from '@material-ui/icons/ArrowBackRounded';

import FormReview from '../Checkout/FormReview';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeftRounded';
import ChevronRightIcon from '@material-ui/icons/ChevronRightRounded';
import CheckIcon from '@material-ui/icons/CheckRounded';

import arquitectura1 from '../../images/arquitectura/1.jpeg';
import arquitectura2 from '../../images/arquitectura/2.jpeg';
import arquitectura3 from '../../images/arquitectura/3.jpeg';

const styles = theme => ({  
  dialog: {    
    maxWidth: 800,    
    margin: '0 auto',    
    zIndex: 999,
  },
  titulo: {
    marginTop: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    fontSize: 32,
    [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing.unit * 3,
        fontSize: 36,
    },
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
  dialogButton: { 
    marginTop: theme.spacing.unit * 2,
    padding: `${theme.spacing.unit * 1.5}px ${theme.spacing.unit * 4}px`, 
  },  
  stepper: {
    padding: 0,
    [theme.breakpoints.up('sm')]: {      
      padding: theme.spacing.unit * 3,
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 3,
    },
  },
  gridDosColumnas: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {      
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 3,
    },
  },
  gridUnaColumna: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 3,       
  },
  imagenArquitectura: {                                   
    objectFit: 'contain',      
    width: '100%',
    border: '2px solid #777',
    borderRadius: 4,
    marginRight: -1,
  },
  textoArquitecturaDosColumnas: {
    paddingRight: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    [theme.breakpoints.up('sm')]: {
      paddingRight: 2,
      marginTop: 0,
    },
  },
  textoArquitecturaUnaColumnas: {    
    marginTop: theme.spacing.unit * 2,  
  },
  
  stepUnaColumna: {  
    width:'100%',
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      width: '80%',
      maxWidth: 500,
    },   
  },
  
  icon: {
    padding: '8px 14px',
  },
  iconRight: {
    padding: '8px 2px',
    paddingLeft: '12px'
  },
  iconLeft: {
    marginRight: theme.spacing.unit, 
    padding: 0,
  },

  checkIcon: {
    fontSize: 120, 
    color: 'green', 
    width: '100%', 
    marginBottom: -10,
  },
  divider1: {
    marginTop: theme.spacing.unit * 4, marginBottom: theme.spacing.unit * 2
  },
  divider2: {
    marginTop: theme.spacing.unit * 8, marginBottom: theme.spacing.unit * 8
  },
  divider3: {
    marginTop: theme.spacing.unit * 4, marginBottom: theme.spacing.unit * 6
  },
  seccionDos: {
    padding: theme.spacing.unit * 0.5, 
    textAlign: 'center',
  }

});

const renderTimestamp = time => {    
  let timestamp = new Date(time);
  return timestamp.toLocaleString();
}

const renderEntrega = (time, delay) => {    
  let timestamp = new Date(time);
  timestamp.setDate(timestamp.getDate() + parseInt(delay));  
  return timestamp.toLocaleDateString("es-ES",{weekday: "long", month: "long", day: "numeric"});
}

const scrollToTituloUno = () => {    
  let element = document.getElementById("seccionUno");   
  element.scrollIntoView({block: "start", behavior: "smooth"});
}
const scrollToTituloDos = () => {    
  let element = document.getElementById("seccionDos");   
  element.scrollIntoView({block: "start", behavior: "smooth"});
}

const scrollToIntegracion = () => {     
  let element = document.getElementById("seccionIntegracion");   
  element.scrollIntoView({block: "start", behavior: "smooth"});
}
const scrollToRouteo = () => {    
  let element = document.getElementById("seccionRouteo");   
  element.scrollIntoView({block: "start", behavior: "smooth"});
}

const GraciasLayout = ({ classes, pedidoUsuario, 
  handleBackClick, value, activeStep,
  handleChangeIndex, handleChangeActiveStepScroll }) => {
  return (
    <Dialog
        open
        onClose={handleBackClick}
        scroll='paper'
        fullScreen
        aria-labelledby="aria-title"
        className={classes.dialog}        
      >          
        
        <DialogTitle disableTypography className={classes.volverHeader}>
          <Button color="secondary" className={classes.volverTexto} onClick={handleBackClick}>
            <BackIcon onClick={handleBackClick} fontSize="small" className={classes.volverIcono} />
              Volver a la Home
          </Button>
        </DialogTitle>
        
        <DialogContent>
            <SwipeableViews
                axis='x'
                index={value}
                onChangeIndex={handleChangeIndex}              
                resistance
                enableMouseEvents                
            >
            
            <Typography component="div" dir='ltr' style={{ padding: 8 * 3 }}>
              <Zoom>
                <CheckIcon className={classes.checkIcon} />
              </Zoom>
              <Slide bottom>
                <Typography variant="h2" align='center' gutterBottom className={classes.titulo} style={{marginTop: 0}} >
                  Tu pedido fue realizado correctamente
                </Typography>
              </Slide>
  
              {
                pedidoUsuario.timestamp &&
                <Fade>
                  <Typography variant="subtitle1" align='center'>
                    {renderTimestamp(pedidoUsuario.timestamp)}
                  </Typography>
                </Fade>
              }
              {
                pedidoUsuario.id && 
                <Fade>
                  <Typography variant="caption" align='center' paragraph>
                    {`ID del pedido: ${pedidoUsuario.id}`}
                  </Typography>
                </Fade>
              }          

              <Divider variant="middle" className={classes.divider1}/>
              
              <Slide bottom>
                <FormReview 
                    values={{
                      name:pedidoUsuario.name, email: pedidoUsuario.email, tel: pedidoUsuario.tel, 
                      entregaDia: pedidoUsuario.entregaDia, entregaHora: pedidoUsuario.entregaHora, 
                      entregaDireccion: pedidoUsuario.entregaDireccion, entregaReceptor: pedidoUsuario.entregaReceptor
                    }} 
                    carrito={pedidoUsuario.carrito} 
                    montoCarrito={pedidoUsuario.montoTotal}
                    unidadesCarrito={pedidoUsuario.unidadesCarrito}     
                    fechaEntrega={renderEntrega(pedidoUsuario.timestamp,pedidoUsuario.entregaDia)}
                />
              </Slide>

              <Divider variant="middle" className={classes.divider2} />

              <Typography variant="h2" align='center' className={classes.titulo} gutterBottom >
                Market App es una aplicación web desarrollada en React.
              </Typography>
              <Button 
                onClick={() => scrollToTituloUno()} fullWidth
                variant='contained' color='primary' size='large'
                className={classes.dialogButton}
              >
                Más sobre esta App              
              </Button>

            </Typography>
            
            <Typography id='seccionUno' component="div" dir='ltr' style={{ padding: 8 * 3 }}>              
              <Typography variant="h2" align='center' paragraph className={classes.titulo} style={{marginBottom: 24}} >
                ¿Qué es una aplicación web?
              </Typography>              

              <Typography  variant="subtitle1" align='justify' paragraph>
                Una aplicación web es un sitio de Internet que funciona igual que una aplicación real: guarda sus propios datos, funciona sin conexión, y es capaz de recibir notificaciones en el celular (incluso cuando la página ya se cerró).
              </Typography>
              
              <Typography  variant="body1" align='justify' gutterBottom >
                Cuando la persona ingresa por primera vez a la página, se descarga un único archivo que contiene toda la aplicación. Todo esto se realiza en forma automática y funciona en todos los dispositivos y celulares en forma nativa, lo que significa que no es necesario instalar nada o pedirle permiso al usuario.
              </Typography>
              <Typography  variant="body1" align='justify' paragraph>
                A partir de este momento el usuario puede utilizar la página y navegar aún estando sin conexión. Mientras haya conexión, las imágenes y otros recursos de la app se descargarán en forma pasiva.
              </Typography>
              <Typography  variant="subtitle2" align='justify' gutterBottom>
                No es necesario solicitar contenido al servidor o enviar una petición para cada acción a realizar, ya que la app tiene toda la lógica y recursos necesarios disponibles de antemano y puede operar en forma independiente.
              </Typography>
              <Typography  variant="body1" align='justify' paragraph>
                En esta web app de ejemplo, las única comunicaciones que se realizan con el servidor son dos:
                al momento de ingresar por primera vez, y al momento de crear un nuevo pedido.
              </Typography>

              <Divider variant="middle" className={classes.divider3} />
              
              <Typography variant="h2" align='center' paragraph className={classes.titulo} style={{marginBottom: 24}}>
                ¿Y por qué una aplicación web?
              </Typography>
              <Typography  variant="subtitle1" align='justify'>
                Internet resuelve el principal problema de las aplicaciones: <b>la distribución</b>.
              </Typography>
              <Typography  variant="subtitle1" align='justify' paragraph>
                Desde cualquier dispositivo y lugar del mundo, podemos ingresar a nuestra app instantáneamente sólo escribiendo su dirección web o buscándola en Google.
                </Typography>
              <Typography  variant="subtitle2" align='justify' paragraph>
                Una web app, desarrollada con buenas prácticas, no requiere ningún ajuste de SEO para aparecer primera en los resultados de Google. También posee el beneficio de poder ser encontrada a partir de cualquier palabra o palabras incluidas en la misma.
              </Typography>                                        
              <Button 
                onClick={() => scrollToTituloDos()} fullWidth
                variant='contained' color='primary' size='large'
                className={classes.dialogButton}
              >
                Arquitectura de la solución              
              </Button>

            </Typography>            

            <Typography id='seccionDos' component="div" dir='ltr' className={classes.seccionDos} >
              <Typography variant="h2" align='center' paragraph className={classes.titulo} style={{marginTop: 36, marginBottom: 24}} >
                Arquitectura de la solución
              </Typography>


              <Stepper activeStep={activeStep} orientation="vertical" className={classes.stepper}>                
                
                <Step id='seccionIntegracion'>
                  <StepLabel>Integración</StepLabel>
                  <StepContent>
                    <Grid container className={classes.gridDosColumnas}>
                      <Grid item xs={12} sm={6}>
                        <img src={arquitectura1} alt='' className={classes.imagenArquitectura}/>
                      </Grid>
                      <Grid item xs={12} sm={6} className={classes.textoArquitecturaDosColumnas}>
                        <Typography  variant="body1" align='justify' paragraph>
                          La aplicación está compuesta por un único componente en React, <b>Market App</b>. 
                        </Typography>
                        <Typography  variant="body1" align='justify' paragraph>
                          React permite crear aplicaciones web en forma de módulos independientes que se pueden integrar con cualquier página y tecnología previa. 
                        </Typography>
                        <Typography  variant="body1" align='justify' paragraph>
                          Dichos componentes web se pueden portar rápidamente a aplicaciones nativas de celular, utilizando React Native.
                        </Typography>
                        <Typography  variant="body1" align='justify' paragraph>
                          React y React Native son las tecnologías detrás de Facebook, Instagram, Pinterest, Airbnb, Paypal y WhatsApp Web.
                        </Typography>
                      </Grid>
                    </Grid>                
                    <div style={{marginLeft: 100}}>                    
                        <Button 
                          className={classes.iconRight}
                          onClick={() => handleChangeActiveStepScroll(1, scrollToIntegracion)}                          
                          variant="contained" color='primary'                          
                        >                          
                          Routeo
                          <ChevronRightIcon />
                        </Button>                        
                    </div>
                  </StepContent>
                </Step>   

                <Step id='seccionRouteo'>
                  <StepLabel>Routeo</StepLabel>
                  <StepContent> 
                    <div className={classes.stepUnaColumna}>
                      <Grid container className={classes.gridUnaColumna}>
                        <Grid item xs={12}>
                          <img src={arquitectura2} alt='' className={classes.imagenArquitectura}/>
                        </Grid>
                        <Grid item xs={12} className={classes.textoArquitecturaUnaColumnas}>
                          <Typography  variant="body1" align='justify' paragraph>
                            Cuando un usuario ingresa a la web, cualquiera sea la dirección ingresada, es dirigido al componente principal de la aplicación, Market App.                        
                          </Typography>
                          <Typography  variant="body1" align='justify' paragraph>
                            Utilizando la librería <b>React Router</b>, se interpreta la dirección URL, obteniendo la ruta y parámetros ingresados.                          
                          </Typography>
                          <Typography  variant="body1" align='justify' paragraph>
                            En función de la ruta de la dirección, Market App instanciará el componente dedicado a dicha ruta.
                          </Typography>                        
                          <Typography  variant="body1" align='justify' paragraph>
                            Estos componentes, denomindados containers, se conectan con otros componentes para obtener todo el estado de la aplicación, e instancian los componentes representacionales que componen la parte gráfica.
                          </Typography>
                          <Typography  variant="body1" align='justify' paragraph>
                            React detecta cualquier cambio de estado y automáticante vuelve a renderizar los componentenes representacionales con los nuevos parámetros.
                          </Typography>                        
                        </Grid>
                      </Grid> 
                      <div>
                        <div>                                              
                          <Button                      
                            className={classes.iconLeft}                                
                            onClick={() => handleChangeActiveStepScroll(0, scrollToIntegracion)}                             
                          >
                            <ChevronLeftIcon />                            
                          </Button>
                          <Button
                            className={classes.iconRight}
                            variant="contained"
                            color="primary"
                            onClick={() => handleChangeActiveStepScroll(2, scrollToRouteo)}                                                  
                          >
                            Persistencia
                            <ChevronRightIcon />
                          </Button>
                        </div>
                      </div>
                    </div>

                  </StepContent>
                </Step>                   
                <Step>
                  <StepLabel>Persistencia</StepLabel>
                  <StepContent>
                    <div className={classes.stepUnaColumna}>
                      <Grid container className={classes.gridUnaColumna}>
                        <Grid item xs={12}>
                          <img src={arquitectura3} alt='' className={classes.imagenArquitectura}/>
                        </Grid>
                        <Grid item xs={12} className={classes.textoArquitecturaUnaColumnas}>
                          <Typography variant="body1" align='justify' gutterBottom>
                            Se usó <b>React Redux</b> para manejar el estado de la aplicación en forma consistente.
                          </Typography>
                          <Typography  variant="body1" align='justify' paragraph>
                            Se utiliza, por ejemplo, para gestionar el carrito de compras, los datos del usuario (que se graban automáticamente luego de la primera compra), y los pedidos realizados.
                          </Typography>
                          <Typography  variant="body1" align='justify' gutterBottom>
                            Mediante <b>Redux Persist</b> se va guardando el estado de la aplicación en el almacenamiento local del dispositivo.
                          </Typography>                        
                          <Typography  variant="body1" align='justify' paragraph>
                            Si el usuario cierra la sesión o reinicia el navegador, el estado se rehidrata automáticamente.
                          </Typography>                        
                          <Typography  variant="body1" align='justify' gutterBottom>
                            Se utilizó <b>Redux Thunk</b> para persistir en la nube y en forma asincrónica los pedidos realizados.
                          </Typography>                        
                          <Typography  variant="body1" align='justify' gutterBottom>
                            Si bien en este caso se utilizó Firebase, es posible hacerlo en cualquier tipo de servidor o servicio en la nube. Recomiendo Amazon ya que posee librerías específicas de React para trabajar con todas sus funcionalidades (AWS Amplify). 
                          </Typography>                        
                        </Grid>
                      </Grid>     
                      <div>
                        <div>                                              
                          <Button      
                            className={classes.iconLeft}                                                  
                            onClick={() => handleChangeActiveStepScroll(1, scrollToRouteo)}                              
                          >
                            <ChevronLeftIcon />                            
                          </Button>
                          <Button
                            className={classes.icon}
                            variant="contained"
                            color="primary"
                            onClick={handleBackClick}                          
                          >
                            Volver a home                            
                          </Button>
                        </div>
                      </div>      
                    </div>     
                  </StepContent>
                </Step>     

              </Stepper>
              
              
              
            </Typography>

            
          </SwipeableViews>
          
        </DialogContent>      
      
      </Dialog>    
  );
};


GraciasLayout.propTypes = {
  classes: PropTypes.object.isRequired,  
  pedidoUsuario: PropTypes.object.isRequired,
  handleBackClick: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  activeStep: PropTypes.number.isRequired,
  handleChangeIndex: PropTypes.func.isRequired,   
  handleChangeActiveStepScroll: PropTypes.func.isRequired,
};

export default withStyles(styles)(GraciasLayout);