import './BasicProject02.css';
import React from 'react';
import cart from './image/shopping-cart.png';


export default function BasicProject02() {
    return (
        <>
        <div id='topcontainer'>
            <div id='shoppinglist'>Shopping List</div>
            <div id='cartcontainer'>
                <img src={cart} id='cart' />
                <div id='circle'>5</div>
            </div>
        </div>
        </>
    )
};