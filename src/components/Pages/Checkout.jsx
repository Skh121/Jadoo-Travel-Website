import React from 'react';
import destination from '../../assets/images/destination1.png';

const Checkout = () => {
  return (
    <div className="checkout-container">
      <div className="order-summary">
        <h2>Destinations</h2>
        
        <div className="item">
          <img src={destination} alt="Air Red Pants" />
          <div className="item-details">
            <p>Air Red Pants</p>
            <p>Color: Red/White</p>
            <p>Size: L</p>
          </div>
          <div className="item-price">
            <p>$45.00</p>
            <p className="original-price">$55.00</p>
          </div>
          <div className="item-quantity">
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" id="quantity" name="quantity" min="1" defaultValue="1" />
          </div>
        </div>

        <div className="item">
          <img src={destination} alt="Court Dri-FIT" />
          <div className="item-details">
            <p>Court Dri-FIT</p>
            <p>Color: Dark Blue</p>
            <p>Size: L</p>
          </div>
          <div className="item-price">
            <p>$22.00</p>
            <p className="original-price">$26.00</p>
          </div>
          <div className="item-quantity">
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" id="quantity" name="quantity" min="1" defaultValue="1" />
          </div>
        </div>

        <div className="item">
          <img src={destination} alt="Sportswear Heritage Windrunner" />
          <div className="item-details">
            <p>Sportswear Heritage Windrunner</p>
            <p>Color: Blue/White</p>
            <p>Size: L</p>
          </div>
          <div className="item-price">
            <p>$55.00</p>
          </div>
          <div className="item-quantity">
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" id="quantity" name="quantity" min="1" defaultValue="1" />
          </div>
        </div>
      </div>

      <div className="payment-summary">
        <h2>Payment Summary</h2>
        
        <div className="transaction-code">
          <p>UNREGISTERED ACCOUNT</p>
          <p>Transaction code: VC11566S</p>
        </div>
        
        <div className="coupon-code">
          <input type="text" placeholder="COUPON CODE" />
          <button>Apply</button>
        </div>
        
        <div className="order-summary-details">
          <p>Order Summary: $122</p>
          <p>Additional Service: $10</p>
          <p>Total Amount: $132</p>
        </div>
        
        <div className="sale-expiry">
          <p>SALE EXPIRING IN: 24 HOURS, 31 MINUTES</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
