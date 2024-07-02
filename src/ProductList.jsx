import React, { useState,useEffect, useRef } from 'react';
import './ProductList.css'
import { useSelector } from 'react-redux';
import PlantList from './components/PlantList';
import CartItems from './components/CartItems';

function ProductList() {
  
   const totalItemsCount = useSelector(state => state.cart.totalItemsCount);
   const styleObj={
    backgroundColor: '#4CAF50',
    color: '#fff!important',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignIems: 'center',
    fontSize: '20px',
   }
   const styleObjUl={
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '1100px',
   }
   const styleA={
    color: 'white',
    fontSize: '30px',
    textDecoration: 'none',
   }
   const sectionRef = useRef(null);
   const handleScrollSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
}
const sectionRef2 = useRef(null);
   const handleScrollTop = () => {
    sectionRef2.current.scrollIntoView({ behavior: 'smooth' });
};
    return (
        <div>
             <div  ref={sectionRef2} className="navbar" style={styleObj}>
            <div className="tag">
               <div className="luxury">
               <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
               <a href="/" style={{textDecoration:'none'}}>
                        <div>
                    <h3 style={{color:'white'}}>Paradise Nursery</h3>
                    <i style={{color:'white'}}>Where Green Meets Serenity</i>
                    </div>
                    </a>
                </div>
              
            </div>
            <div style={styleObjUl}>
                <div> <a onClick={handleScrollTop} href="#" style={styleA}>Plants</a></div>
                
                <div> <a onClick={handleScrollSection} href="#" style={styleA}><h1 className='cart'><span>{totalItemsCount}</span><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="68" width="68"><rect width="156" height="156" fill="none"></rect><circle cx="80" cy="216" r="12"></circle><circle cx="184" cy="216" r="12"></circle><path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" id="mainIconPathAttribute"></path></svg></h1></a></div>
            </div>
        </div>
        <div>
            <h1>Products:</h1>
        </div>
        <PlantList/>
        <div ref={sectionRef}>
            <h1>Shopping Cart:</h1>
        </div>
        <CartItems/>
        <div className="cart-container"> 
            <div className="continue_shopping_btn">
            <button className="get-started-button" onClick={handleScrollTop}>Continue Shopping</button>
            <br />
            <button className="get-started-button1" onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
            </div>
      </div>
    </div>
    );
}

export default ProductList;
