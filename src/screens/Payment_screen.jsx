import React, { useState } from 'react';
import './Payment_screen.css'; // Import your CSS file
import NavBarComponent from '../components/navbar_component.jsx';
import  Footer_component from "../components/footer_component.jsx";

function PaymentPage() {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCVV] = useState('');

  const navbarItems = [
    {label: 'Home', href: '#home'},
  ];

  const handlePayment = () => {
    // Perform payment processing here (e.g., using a payment gateway)
    alert('Payment Successful!');
  };

  return (

    <div>
      <NavBarComponent items={navbarItems} />
      <div className="container payment-container">
      <div className="row" style={{display:"flex",justifyContent:"center"}}>
        <div className="col-md-12" style={{display:"flex",justifyContent:"center"}}>
          <div className="payment-card">
            <h2>Card Payment</h2>
            <form>
              <div className="form-group">
                <label>Card Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter card number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Cardholder Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter cardholder name"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Expiry Date</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="MM/YY"
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>CVV</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="CVV"
                      value={cvv}
                      onChange={(e) => setCVV(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={handlePayment}
                style={{width: "20%"}}
              >
                Pay Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer_component />
    </div>
    
  );
}

export default PaymentPage;
