import React from 'react'
import { useRecoilValue } from 'recoil'
import TotalsState from './RcoilState/TotalState'

export default function Totals() {
    const totals = useRecoilValue(TotalsState);
    return (
        <div>
            <h2>Totals</h2>
            <p>Subtotal: ${totals.subtotal.toFixed(2)}</p>
            <p>Shipping: ${totals.shipping.toFixed(2)}</p>
            <p>
                <strong>Total: ${totals.total.toFixed(2)}</strong>
            </p>
        </div>
    )
}
