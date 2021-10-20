import { selector } from "recoil";
import { destinations, Inventory } from "../InventoryList";
import CartState from "./CartState";
import ShippingState from "./ShippingState";

const TotalsState = selector({
    key: "totals_State",
    get: ({ get }) => {
        const cart = get(CartState);
        const shipping = get(ShippingState);
        const subtotal = Object.entries(cart).reduce(
            (acc, [id, quantity]) => acc + Inventory[id].price * quantity,
            0
        );
        const shippingTotal = destinations[shipping];
        return {
            subtotal,
            shipping: shippingTotal,
            total: subtotal + shippingTotal,
        };
    }
})

export default TotalsState