import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";

import storeItems from "../data/items.json";

import { CartItem } from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header className="border-b-2 border-dashed">
        <Offcanvas.Title className="w-full">
          <h1 className="tracking-widest text-4xl mb-3 flex justify-between">
            Cart
            <button className="btn md:ml-60 ml-44" onClick={closeCart}>
              x
            </button>
          </h1>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="absolute bottom-10 m-auto text-2xl w-full border-t-2 border-dashed">
            <div className="mt-10">
              Total:{" "}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </div>
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
