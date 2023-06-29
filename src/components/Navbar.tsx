import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="py-9 flex justify-between border-b-2 border-dashed hover:border-dotted mb-14">
      <div className="headerLeft flex items-center md:gap-28 gap-4 w-[80%]">
        <Link to="/">
          <h2>Home</h2>
        </Link>
        <Link to="/store">
          <h2>Store</h2>
        </Link>
        <Link to="/about">
          <h2>About</h2>
        </Link>
      </div>
      <div className="headerRight">
        <h1>Cart</h1>
      </div>
    </div>
  );
}
