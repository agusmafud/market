# React Market App
### Live Demo: [https://agusmafud.github.io/market/](https://agusmafud.github.io/market/)

React Market App es un sitio web de ecommerce construido con React, Material UI y Redux. Es una serverless app, los pedidos generados son persistidos en la nube utilizando los servicios gratuitos de Firebase.

La arquitectura definida es la de una progressive web app, combinando lo mejor de la Web y lo mejor de las apps. No requiere instalación, se carga rápidamente (incluso con redes débiles), tiene un ícono en la pantalla principal y se carga como experiencia de pantalla completa y de primer nivel. También puede funcionar offline y envíar notificaciones push relevantes, tal como lo hace una app nativa.

### Construido con

* [React](https://reactjs.org/) - React es una libería de Javascript para construir interfases de usuario, utilizando una arquitectura modular de componentes encapsulados.
* [Material-UI](https://material-ui.com/) - Componentes visuales de React que implementan la normativa de diseño Material Design de Google.
* [Redux](https://es.redux.js.org/) - Redux es un contenedor predecible del estado de la aplicación. Se utiliza para mantener el estado del carrito de compras, los datos de usuario, y enviar y recibir información a la nube (Firebase).
* [Redux Thunk](https://github.com/reduxjs/redux-thunk) - Redux Thunk es un middleware de Redux para manejar acciones asíncronas. Se usa para enviar los pedidos y recibir pedidos de Firebase.
* [Redux Persist](https://github.com/rt2zz/redux-persist) - Permite persistir el estado de Redux en el local storage del dispositivo del usuario. De esta manera, un usuario que reingresa al sitio, ya sea por haber cerrado o reiniciado la pestaña, podrá seguir viendo su mismo carrito de compra y datos de usuario.
* [Formik](https://jaredpalmer.com/formik/) - Usado en todos los forms. Permite un manejo simple y adaptable en función de las necesidades del sitio.
* [React Reveal](https://www.react-reveal.com/) - Libería en React para animaciones de alta performance.
* [React Swipeable Views](https://react-swipeable-views.com/) - Componentes en React para vistas "swipeables".

### Performance
Resultados de performance utilizando [Google Lighthouse](https://developers.google.com/web/tools/lighthouse/?hl=es)
![Performance Google Lighthouse](performance.png?raw=true "Performance Google Lighthouse")
