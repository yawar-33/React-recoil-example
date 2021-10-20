import React from 'react'
import { useRecoilState } from 'recoil';
import { destinations } from './InventoryList';
import ShippingState from './RcoilState/ShippingState';

export default function Shipping() {
    const [shipping, setShipping] = useRecoilState(ShippingState);

    return (
        <div>
            <h2>Shipping</h2>
            {Object.entries(destinations).map(([country, price]) => (
                <button onClick={()=>setShipping(country)}>
                    {country} @ {price}
                    {country === shipping ? <span> 🌶</span> : ""}
                </button>
                
            ))}
        </div>
    )
}
