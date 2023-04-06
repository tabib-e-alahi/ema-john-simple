import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}=props;

    let total=0;
    let totalShipping=0;
    let quantity=0;
    for (let product of cart){
        if(product.quantity === 0){
            product.quantity=1;
        }
        // product.quantity=product.quantity || 1;
        total=total + product.price * product.quantity;
        totalShipping=totalShipping+product.shipping * product.quantity;
        quantity = quantity + product.quantity
    }
    const tax=(total*7/100)

    const grandTotal=total + totalShipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected item: {quantity}</p>
            <p>Total price: ${total}</p>
            <p>Shipping charge: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)} </h6>
        </div>
    );
};

export default Cart;