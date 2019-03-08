import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Helmet } from "react-helmet";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPedidoUsuarioById } from '../redux/selectors';
import { getPedido } from '../redux/actions';
import Gracias from '../components/Gracias';


class GraciasContainer extends Component {    

    state = {
        value: 0,
        activeStep: 0
    };
    handleChangeIndex = index => {        
        this.setState({ value: index });
    };        
    handleChangeActiveStepScroll = (newStep, scroll) => {        
        this.setState({ activeStep: newStep }, () => scroll());
    };

    componentDidMount() {
        if (this.pedidoUsuario === {}) {            
            this.props.getPedido(this.props.match.params.id);
        }        
    }
    
    handleHomeClick = () => {
        this.props.history.push('/');
    }
    handlePedidosUsuarioClick = () => {
        this.props.history.push('/pedidos');
    }
    handlePedidosClick = () => {
        this.props.history.push('/pedidos/all');
    }
    
    render() {        
        return (                        
            <React.Fragment>            
                
                <Helmet>          
                    <title>Gracias por tu compra</title>                    
                </Helmet>
            
                <Gracias 
                    pedidoUsuario={this.props.pedidoUsuario}
                    handleBackClick={this.handleHomeClick}
                    value={this.state.value}
                    activeStep={this.state.activeStep}
                    handleChangeIndex={this.handleChangeIndex}                      
                    handleChangeActiveStepScroll={this.handleChangeActiveStepScroll}            
                /> 

            </React.Fragment>
            
        );
    }
}

GraciasContainer.propTypes = {    
    match: PropTypes.object.isRequired,
    pedidoUsuario: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({ pedidoUsuario: getPedidoUsuarioById(state, props.match.params.id) });
const mapDispatchToProps = { getPedido };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(GraciasContainer));