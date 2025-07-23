import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import delImgUrl from "../assets/images/shop/del.png";
import CheckOutPage from "./CheckOutPage";

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
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          <Link to="/shop">
                            <img src={item.img} alt={item.name} />
                          </Link>
                        </div>
                        <div className="p-content">
                          <Link to="/shop">{item.name}</Link>
                        </div>
                      </td>
                      <td className="cat-price">${item.price}</td>
                      <td className="cat-quantity">
                        <div className="cart-plus-minus">
                          <div
                            className="dec qtybutton"
                            onClick={() => handleDecrease(item)}
                          >
                            -
                          </div>
                          <input
                            className="cart-plus-minus-box"
                            type="text"
                            name="qtybutton"
                            value={item.quantity}
                          />
                          <div
                            className="inc qtybutton"
                            onClick={() => handleIncrease(item)}
                          >
                            +
                          </div>
                        </div>
                      </td>
                      <td className="cat-toprice">
                        ${calculateTotalPrice(item)}
                      </td>
                      <td className="cat-edit">
                        <a href="#" onClick={() => handleRemoveItem(item)}>
                          <img src={delImgUrl} alt="" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="cart-bottom">
              <div className="cart-checkout-box">
                <form className="coupon">
                  <input
                    type="text"
                    className="cart-page-input-text"
                    name="coupon"
                    id="coupon"
                    placeholder="Coupon Code ...."
                  />
                  <input type="submit" value="Apply Coupon" />
                </form>
                <form className="cart-checkout">
                  <input type="submit" value="Update Coupon" />
                  <div>
                    <CheckOutPage />
                  </div>
                </form>
              </div>
              <div className="shiping-box">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="calculate-shiping">
                      <h3>Calculate Shipping</h3>
                      <div className="outline-select">
                        <select className="outline-select">
                          <option value="us">United States (US)</option>
                          <option value="uk">United Kingdom (UK)</option>
                          <option value="pak">Pakistan (PAK)</option>
                          <option value="ger">Germany (GER)</option>
                          <option value="ind">India (IND)</option>
                          <option value="bd">Bangladesh (BAN)</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>
                      <div className="outline-select shipping-select">
                        <select>
                          <option value="us">New York</option>
                          <option value="uk">London</option>
                          <option value="pak">Islamabad</option>
                          <option value="ger">Berlin</option>
                          <option value="ind">New Dehli</option>
                          <option value="bd">Dhaka</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        name="postalCode"
                        id="postalCode"
                        className="cart-page-input-text"
                        placeholder="PostalCode/ZIP *"
                      />
                      <button type="submit">Update Address</button>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                      <h3>Cart Totals</h3>
                      <ul className="lab-ul">
                        <li>
                          <span className="pull-left">Cart Subtotal</span>
                          <p className="pull-right">$ {cartSubtotal}</p>
                        </li>
                        <li>
                          <span className="pull-left">
                            Shipping and Handling
                          </span>
                          <p className="pull-right">Free Shipping</p>
                        </li>
                        <li>
                          <span className="pull-left">Order Total</span>
                          <p className="pull-right">
                            $ {orderTotal.toFixed(2)}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
