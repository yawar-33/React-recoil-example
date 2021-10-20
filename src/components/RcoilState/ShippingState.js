import { atom } from "recoil";
const ShippingState = atom({
    key: "shipping_State",
    default: "US",
});


export default ShippingState