import React from 'react'
import { useRecoilValue } from 'recoil';
import {Inventory} from './InventoryList';
import CartState from './RcoilState/CartState';

export default function CartItems() {
    const cart = useRecoilValue(CartState);
    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {Object.keys(cart).length === 0 ?
                    <p>No items.</p> :
                    Object.entries(cart).map(([id, quantity]) => {
                        return (
                            <li key={id} >
                                {Inventory[id].name} x {quantity}
                            </li>
                        )
                    }
                    )}
            </ul>
        </div >

    );
}
