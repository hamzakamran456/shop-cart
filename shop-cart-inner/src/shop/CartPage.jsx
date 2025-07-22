import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedcartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedcartItems);
  }, []);

  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  const handleIncrease = (item) => {
    item.quantity += 1;
    setCartItems([...cartItems]);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCartItems([...cartItems]);
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  };

  const handleRemoveItem = (item) => {
    const updatedCart = cartItems.filter(
      (cartItems) => cartItems.id !== item.id
    );
    setCartItems(updatedCart);
    updatedLocalStorage(updatedCart);
  };

  const updatedLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const cartSubtotal = cartItems.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0);

  const orderTotal = cartSubtotal;

  return (
    <div>
      <PageHeader title={"Shop Cart"} curPage={"Cart Page"} />
      <div className="shop-cart padding-tb">
        <div className="container">
            <div className="section-wrapper">
                <div className="cart-top">
                    <table>
                        <thead>
                            <tr>
                                <th className="cart-product">Product</th>
                                <th className="cart-price">Price</th>
                                <th className="cart-quantity">Quantity</th>
                                <th className="cart-toprice">Total</th>
                                <th className="cart-edit">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item,index)=>(
                                <tr key={index}>
                                    <td className=""></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
