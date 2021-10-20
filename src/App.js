import React from "react";
import {
  RecoilRoot,
} from "recoil";
import AvailableItems from "./components/AvailableItems";
import CartItems from "./components/CartItems";
import Shipping from "./components/Shipping";
import Totals from "./components/Totals";


function App() {
  return (
    <RecoilRoot>
      <AvailableItems />
      <CartItems />
      <Shipping />
      <Totals />
    </RecoilRoot>
  );
}
export default App;
