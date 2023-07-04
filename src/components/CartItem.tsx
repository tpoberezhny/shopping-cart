import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";

import { Stack } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();

  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack
      direction="horizontal"
      className="mb-3 rounded-xl border-solid border-2 border-gray-200 flex items-center"
    >
      <img
        src={item.imgUrl}
        className="w-[80px] h-[80px] object-cover rounded-xl border-solid border-2 border-black"
      />
      <div className="me-auto ml-2 max-w-[120px]">
        <div className="title">
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-sm text-gray-400">x{quantity}</span>
          )}
        </div>
        <div className="price text-sm text-gray-400">
          {formatCurrency(item.price)}
        </div>
      </div>
      <div className="ml-3 text-sm">
        {formatCurrency(item.price * quantity)}
      </div>
      <button
        className="dangerBtn ml-4 max-w-[26px] mr-1"
        onClick={() => removeFromCart(item.id)}
      >
        x
      </button>
    </Stack>
  );
}
