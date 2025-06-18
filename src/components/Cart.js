import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="m-4 p-4">
      <h1 className="text-2xl font-bold text-center">cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="flex mx-auto m-y-2 p-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <p>Your cart is empty, please add some items</p>
        )}
        <ItemList data={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
