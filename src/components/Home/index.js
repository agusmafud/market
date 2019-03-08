import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Hero from './Hero';
import Claim from './Claim';
import ProductosGrid from './ProductosGrid';
import { getUnidadesCarrito } from '../../helpers/carritoHelpers';

const Home = ({ carrito, productos, handleCarritoClick, newsletter, handleNuevoNewsletter }) => {
    return (
        <React.Fragment>
            
            <Header 
                handleCarritoClick={handleCarritoClick}
                unidades={getUnidadesCarrito(carrito)} 
                fixed={true}
                homeSeleccionable={false}
                exitConfirmation={false}
                carritoVisible={true}
                carritoSeleccionable={true}
            />

            <Hero />

            <Claim />            

            <ProductosGrid 
                productos={productos} 
                carrito={carrito}       
                newsletter={newsletter}
                handleNuevoNewsletter={handleNuevoNewsletter}                               
            />            
        </React.Fragment>
    );
};

Home.propTypes = {
    carrito: PropTypes.array.isRequired,
    productos: PropTypes.array.isRequired,
    handleCarritoClick: PropTypes.func.isRequired,
    newsletter: PropTypes.string.isRequired,
    handleNuevoNewsletter: PropTypes.func.isRequired,
};

export default Home;