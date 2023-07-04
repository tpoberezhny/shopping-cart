import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);
  return (
    <div className="bg-white shadow-2xl min-h-[500px] group rounded-xl">
      {/* image section */}
      <div className="overflow-hidden mb-10">
        <img
          className="group-hover:scale-110 transition-all duration-300 cursor-pointer w-[360px] h-[300px] object-cover items-center flex justify-center"
          src={imgUrl}
          alt="Item"
        />
      </div>
      {/* title/price section */}
      <div className="flex flex-col">
        <div className="flex justify-between mb-10 px-5">
          <span>{name}</span>
          <div>|</div>
          <span>{formatCurrency(price)}</span>
        </div>
      </div>
      {/* add/count section */}
      <div className="flex justify-center item-center mx-auto w-[250px]">
        {quantity === 0 ? (
          <button className="btn" onClick={() => increaseCartQuantity(id)}>
            Add to cart
          </button>
        ) : (
          <div className="flex items-center flex-col gap-2">
            <div className="flex items-center justify-center gap-2 mt-[-15px] mb-2">
              <button
                className="btn w-[50px]"
                onClick={() => decreaseCartQuantity(id)}
              >
                -
              </button>
              <div>
                <span>{quantity} in cart</span>
              </div>
              <button className="btn" onClick={() => increaseCartQuantity(id)}>
                +
              </button>
            </div>
            <button className="dangerBtn" onClick={() => removeFromCart(id)}>
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
