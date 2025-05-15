import './Producto.css';
import { useState } from 'react';


function Producto({titulo, precio, descripcion}) {

    const [precioFinal, setPrecioFinal] = useState(precio);

    return (
        <>
            <div className='contenedor'>
                <h1>{ titulo }</h1>
                <h2>Q. { precioFinal }</h2>
                <p>{ descripcion }</p>
                <div className='contenedor-buttons'>
                    <button className='button-comprar'>Comprar</button>
                    <button className='button-descuento' onClick={() => setPrecioFinal((precioFinal) => precioFinal * 0.9)}>Aplicar 10% descuento</button>
                </div>
            </div>
        </>
    );
}

export default Producto
