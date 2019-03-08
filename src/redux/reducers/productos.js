import uno from '../../images/productos/1.png';
import dos from '../../images/productos/2.jpg';
import tres from '../../images/productos/3.png';
import cuatro from '../../images/productos/4.jpg';
import cinco from '../../images/productos/5.jpg';
import seis from '../../images/productos/6.jpg';
import siete from '../../images/productos/7.jpg';
import ocho from '../../images/productos/8.jpg';
import nueve from '../../images/productos/9.jpg';
import diez from '../../images/productos/10.jpg';

const productos = [
    {
        "id": 0,
        "imagen": uno,        
        "nombre": "Caja de bombones tradicionales",
        "descripcionBreve": "9 unidades rellenas con ganache de chocolate.",
        "descripcion": "Ganaches de chocolate con leche, recubiertos con chocolate semiamargo templado. Pintados a mano con pintura a base de manteca de cacao.",
        "precio": 100,            
    },
    {
        "id": 1,
        "imagen": dos,        
        "nombre": "Caja de bombones veganos",
        "descripcionBreve": "9 unidades de bombones veganos, rellenos con fondant de chocolate.",
        "descripcion": "Ganache de chocolate con leche, recubierto con chocolate semiamargo templado. Pintadas con pinturas a base de manteca de cacao.",
        "precio": 100,            
    },
    {
        "id": 2,
        "imagen": tres,        
        "nombre": "Caja de trufas de chocolate",
        "descripcionBreve": "9 unidades de trufas de chocolate semiamargo.",
        "descripcion": "Ganaches de chocolate con leche, recubiertos con chocolate semiamargo templado. Pintados a mano con pintura a base de manteca de cacao.",
        "precio": 100,            
    },
    {
        "id": 3,
        "imagen": cuatro,        
        "nombre": "Tableta de chocolate con leche",
        "descripcionBreve": "Tableta de chocolate con leche pintada a mano.",
        "descripcion": "Ganaches de chocolate con leche, recubiertos con chocolate semiamargo templado. Pintados a mano con pintura a base de manteca de cacao.",
        "precio": 120,            
    },
    {
        "id": 4,
        "imagen": cinco,        
        "nombre": "Tableta de chocolate blanco",
        "descripcionBreve": "Tableta de chocolate blanco pintada a mano.",
        "descripcion": "Ganaches de chocolate con leche, recubiertos con chocolate semiamargo templado. Pintados a mano con pintura a base de manteca de cacao.",
        "precio": 120,            
    },
    {
        "id": 5,
        "imagen": seis,
        "nombre": "Tableta de chocolate 70% cacao",
        "descripcionBreve": "Tableta de chocolate con 70% de cacao, pintada a mano.",
        "descripcion": "Ganaches de chocolate con leche, recubiertos con chocolate semiamargo templado. Pintados a mano con pintura a base de manteca de cacao.",
        "precio": 120,            
    },
    {
        "id": 6,
        "imagen": siete,
        "nombre": "Tableta de chocolate 90% cacao",
        "descripcionBreve": "Tableta de chocolate con 90% cacao, pintada a mano.",
        "descripcion": "Ganaches de chocolate con leche, recubiertos con chocolate semiamargo templado. Pintados a mano con pintura a base de manteca de cacao.",
        "precio": 120,            
    },
    {
        "id": 7,
        "imagen": ocho,
        "nombre": "Tableta de chocolate con maracuyá",
        "descripcionBreve": "Tableta de chocolate con rellena con maracuya y frambuesa.",
        "descripcion": "Ganaches de chocolate con leche, recubiertos con chocolate semiamargo templado. Pintados a mano con pintura a base de manteca de cacao.",
        "precio": 120,            
    },
    {
        "id": 8,
        "imagen": nueve,
        "nombre": "Tableta vegana de lima y pistacho",
        "descripcionBreve": "Tableta de chocolate vegano rellena con lima y pistacho.",
        "descripcion": "Ganaches de chocolate con leche, recubiertos con chocolate semiamargo templado. Pintados a mano con pintura a base de manteca de cacao.",
        "precio": 120,            
    },
    {
        "id": 9,
        "imagen": diez,
        "nombre": "Huevo de pascuas grande",
        "descripcionBreve": "Huevo de chocolate semiamargo, pintado a mano.",
        "descripcion": "Ganaches de chocolate con leche, recubiertos con chocolate semiamargo templado. Pintados a mano con pintura a base de manteca de cacao.",
        "precio": 120,            
    }
];

export default function(state = productos, action) {
    return state;    
}
