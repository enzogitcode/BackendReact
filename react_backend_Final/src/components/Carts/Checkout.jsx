import Ticket from './Ticket';
import { purchase } from '../../service/config';
import { useContext } from 'react';
import { useState } from 'react';
import {cartContext} from '../../context/CartContext'

const Checkout = () => {
    const [showTicket, setShowTicket] = useState(false);
    const { totalContext, totalQuantityContext } = useContext(cartContext)

    const handlePurchase = async () => {
        await purchase()
    };
    const handleTicket = () => {
        setShowTicket(!showTicket);
    };

    return (
        <div>
            <h1 className='text-center'>Finalizar Compra</h1>
            <div className="totalContainer text-center mt-3">
                <h5>Cantidad total de productos: {totalQuantityContext}</h5>
                <h5>Total: $ {totalContext}</h5>
            </div>
            <div className='text-center'>
                <button onClick={handlePurchase}>Finalizar compra</button>
                <button onClick={handleTicket}>
                    {showTicket ? 'Ocultar Ticket' : 'Mostrar Ticket'}
                </button>
                {showTicket && <Ticket />}
            </div>
        </div>
    );
};

export default Checkout