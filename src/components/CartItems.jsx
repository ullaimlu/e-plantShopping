import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart, increaseItemQuantity, decreaseItemQuantity, clearItems } from "./CreateSlice";
import './CartItems.css'

function CartItems(){
    const cartItems = useSelector(state=>state.cart.cartItems)
    const totalAmount = cartItems.reduce((total, item)=>total + parseFloat(item.cost.replace('$', '')) * item.quantity, 0)
    const dispatch = useDispatch()

    function handleRemove(itemId){
        dispatch(removeItemFromCart(itemId))

    }

    function handleDecrease(itemId){
        dispatch(decreaseItemQuantity(itemId))
    }

    function handleIncrease(itemId){
        dispatch(increaseItemQuantity(itemId))
    }

    function handleClear(){
        dispatch(clearItems())
    }

   
    function calculateTotalCost(item) {
        // Remover el signo de dólar y convertir el costo a un número
        const cost = parseFloat(item.cost.replace('$', ''));
        const total = cost * item.quantity;
        return total;
    }
    const handleContinueShopping = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return(
        <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${totalAmount}</h2>
      <div>
        {cartItems.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrease(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrease(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      
    </div>
  );
}

export default CartItems