import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ReviewItem.css';

const ReviewItem = ({ product,handleToRemoveFromCart }) => {
    const { id, name, img, price, quantity } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>

                <p className='review-title'>{name}</p>
                <p>Price: <span className='orange-text'>${price}</span> </p>
                <p>Quantity: <span className='orange-text'>{quantity}</span></p>
                
            </div>
            <button onClick={()=>handleToRemoveFromCart(id)} className='btn-delete'> <FontAwesomeIcon className='btn-trash' icon={faTrashAlt} /></button>


        </div>
    );
};

export default ReviewItem;