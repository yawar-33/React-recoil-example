import React from 'react'
import { useRecoilState } from 'recoil';
import {Inventory} from "./InventoryList"
import CartState from './RcoilState/CartState';
export default function AvailableItems() {
    const [cart, setCart] = useRecoilState(CartState);
    return (
        <div>
            <h2>Available Items</h2>
            <ul>
                {Object.entries(Inventory).map(([id, { name, price }]) => {
                    return (
                        <li key={id}>
                            {name} @ ${price.toFixed(2)}
                            <button onClick={() => {
                                setCart({ ...cart, [id]: (cart[id] || 0) + 1 });
                            }}>Add</button>
                            <button 
                            onClick={() => {
                                const copy = { ...cart };
                                if (copy[id] === 1) {
                                    delete copy[id];
                                    setCart(copy);
                                } else {
                                    setCart({ ...copy, [id]: copy[id] - 1 });
                                }
                            }}>Remove</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
