import { FIJAR_UNIDADES, CERRAR_MENSAJE_FOTTER } from "../actionTypes";

const initialState = {
    mensaje: "",
    show: false
};

export default function(state = initialState, action) {
    switch (action.type) {
                
        case FIJAR_UNIDADES: {
            const { nombre } = action.payload.producto;  
            const { nuevaCantidad, previaCantidad } = action.payload;      
            let mensaje = "";                      
        
            if (previaCantidad === 0) {
                (nuevaCantidad === 1) ?
                    mensaje = `${nuevaCantidad} unidad de ${nombre} agregada`
                :
                    mensaje = `${nuevaCantidad} unidades de ${nombre} agregadas`
                ;                                
            } else if (nuevaCantidad === 0) {
                (previaCantidad === 1) ?
                    mensaje = `Se quitó a '${nombre}' del carrito de compras`
                :
                    mensaje = `Se eliminaron las ${previaCantidad} unidades de ${nombre}`
                ;                
            } else if (nuevaCantidad > previaCantidad) {
                (nuevaCantidad - previaCantidad === 1) ?
                    mensaje = `Se sumó ${(nuevaCantidad - previaCantidad)} unidad de ${nombre} (Total:${nuevaCantidad})`
                :
                    mensaje = `Se sumaron ${(nuevaCantidad - previaCantidad)} unidades de ${nombre} (Total:${nuevaCantidad})`
                ;                
            } else if (nuevaCantidad < previaCantidad) {
                (previaCantidad - nuevaCantidad === 1) ?
                    mensaje = `Se quitó ${(previaCantidad - nuevaCantidad)} unidad de ${nombre} (Total:${nuevaCantidad})`
                :
                    mensaje = `Se quitaron ${(previaCantidad - nuevaCantidad)} unidades de ${nombre} (Total:${nuevaCantidad})`
                ;                                
            }
            else { mensaje= 'Carrito actualizado'}

            return {
                ...state,
                mensaje: `${mensaje}`,
                show: true
            }       
        }     
        
        case CERRAR_MENSAJE_FOTTER: {
            return {
                ...state,
                show: false
            }
        }

        default: return state;
    }
}
