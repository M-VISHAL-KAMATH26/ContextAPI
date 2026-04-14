// components/ProductCard.jsx
import useCart from "../context/Cart";
function ProductCard({ name, price }) {
    const { cartcount, setCartcount } = useCart();
    const handleClick = () => {
        setCartcount(cartcount+1);
    }
  return (
<>
    <div>
      <h2>{name}</h2>
      <p>{price}</p>
      <button onClick={handleClick}>Add to Cart</button>
    </div>
    </>
  );
}

export default ProductCard;