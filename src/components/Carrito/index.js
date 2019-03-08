import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Home/Header';
import CarritoHeader from './CarritoHeader';
import CarritoVacio from './CarritoVacio';
import CarritoTabla from './CarritoTabla';
import CarritoResumen from './CarritoResumen';
import { getUnidadesCarrito, getMontoCarrito} from '../../helpers/carritoHelpers';

const Carrito = 
    ({ carrito, handleSumarUnidad, handleRestarUnidad, 
    handleRemoverProducto, handleHomeClick, handleCheckoutClick }) => {
    return (
        <React.Fragment>
            
            <Header 
                handleHomeClick={handleHomeClick}
                unidades={getUnidadesCarrito(carrito)} 
                fixed={false}                
                homeSeleccionable={true}
                exitConfirmation={false}
                carritoVisible={true}
                carritoSeleccionable={false}
            />            

            <CarritoHeader />

            { 
                (carrito.length === 0) &&
                <CarritoVacio
                    handleHomeClick={handleHomeClick}
                 />
            }
            
            { 
                (carrito.length > 0) &&
                <React.Fragment>
                    <CarritoTabla 
                        carrito={carrito}
                        onSumarUnidad={handleSumarUnidad} 
                        onRestarUnidad={handleRestarUnidad}
                        onRemoverProducto={handleRemoverProducto}
                    />
                    <CarritoResumen 
                        subtotal={getMontoCarrito(carrito)}
                        onCheckoutClick={handleCheckoutClick}
                    />
                </React.Fragment>
            }
            
        </React.Fragment>
    );
};

Carrito.propTypes = {
    carrito: PropTypes.array.isRequired,        
    handleSumarUnidad: PropTypes.func.isRequired,
    handleRestarUnidad: PropTypes.func.isRequired,
    handleRemoverProducto: PropTypes.func.isRequired,
    handleHomeClick: PropTypes.func.isRequired,
    handleCheckoutClick: PropTypes.func.isRequired,    
};

export default Carrito;