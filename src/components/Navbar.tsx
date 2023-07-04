import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <header>
      <div className="py-9 flex justify-between border-b-2 border-dashed hover:border-dotted mb-14 ">
        <div className="headerLeft flex items-center md:gap-28 gap-9 w-[80%]">
          <Link to="/">
            <h2 className="text-3xl">Home</h2>
          </Link>
          <Link to="/store">
            <h2 className="text-3xl">Store</h2>
          </Link>
        </div>
        <div className="headerRight">
          <button
            className="outline rounded-full p-2 hover:bg-teal-300 ease-in-out duration-300 relative"
            onClick={openCart}
          >
            <img
              src="../shopping-cart.png"
              width={40}
              height={40}
              alt="Shopping cart"
            />
            <div className="rounded-full bg-red-600 flex justify-center items-center w-6 h-6 text-white absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4">
              {cartQuantity}
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
