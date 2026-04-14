import useCart from "../context/Cart";

function Navbar() {
  const { cartcount } = useCart();

  return (
    <nav>
      <h1>My Shop</h1>
      <span>🛒 {cartcount}</span>
    </nav>
  );
}

export default Navbar;