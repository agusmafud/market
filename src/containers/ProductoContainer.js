import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Helmet } from "react-helmet";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCarrito, getProductos } from '../redux/selectors';
import { fijarUnidades } from '../redux/actions';
import { getCantidadCarrito } from '../helpers/carritoHelpers';

import Producto from '../components/Producto';

class ProductoContainer extends Component {    
    
    constructor(props) {
        super(props);        
        let id = parseInt(props.match.params.id, 10);        
        this.state = { nuevaCantidad: getCantidadCarrito(props.carrito, id) };                  
    }

    incrementarCantidad = () => {        
        this.setState(prevState => ({nuevaCantidad: prevState.nuevaCantidad+1}));        
    }
    decrementarCantidad = () => {
        this.setState(prevState => ({nuevaCantidad: prevState.nuevaCantidad > 1 ? prevState.nuevaCantidad-1 : 0}))        
    }
    fijarUnidades = (producto, nuevaCantidad, previaCantidad) => {
        this.props.fijarUnidades(producto, nuevaCantidad, previaCantidad);
        this.props.history.push('/');
    }

   
    handleCarritoClick = () => {
        this.props.history.push('/carrito');
    }
    handleHomeClick = () => {
        this.props.history.push('/');
    }

    render() {
        const id = parseInt(this.props.match.params.id, 10);
        const { productos, carrito } = this.props;                
        const producto = productos[id];
        return (
            <React.Fragment>            
                
                <Helmet>          
                    <title>{producto.nombre}</title>                    
                </Helmet>
                
                <Producto 
                    producto={producto}
                    unidades={getCantidadCarrito(carrito, id)}
                    nuevaCantidad={this.state.nuevaCantidad}
                    onIncrementarCantidad={this.incrementarCantidad}
                    onDecrementarCantidad={this.decrementarCantidad}
                    onFijarUnidades={this.fijarUnidades}                 
                    handleBackClick={this.handleHomeClick}
                />       

            </React.Fragment>             
        );
    }
}

ProductoContainer.propTypes = {    
    productos: PropTypes.array.isRequired,
    carrito: PropTypes.array.isRequired,    
};

const mapStateToProps = state => ({ 
    productos: getProductos(state), 
    carrito: getCarrito(state),    
});
const mapDispatchToProps = { fijarUnidades };
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductoContainer));