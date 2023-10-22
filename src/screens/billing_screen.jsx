import React, {useState} from 'react';
// import './BillingScreen.css';

export default function BillingScreen() {
    const [billingInfo, setBillingInfo] = useState({
        fullName: '',
        billingAddress: '',
        creditCardNumber: '',
        expirationDate: '',
        cvv: '',
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setBillingInfo({
            ...billingInfo,
            [name]: value,
        });
    };

    const handlePayment = () => {
        // Handle the payment process here.
        // You can send billingInfo to your payment gateway.
        // Display a confirmation message or handle any errors.
    };

    return (
        <div className="billing-container">
            <h2>Billing Information</h2>
            <form className="billing-form">
                <div className="form-group">
                    <label htmlFor="fullName">Full Name:</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={billingInfo.fullName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="billingAddress">Billing Address:</label>
                    <input
                        type="text"
                        id="billingAddress"
                        name="billingAddress"
                        value={billingInfo.billingAddress}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="creditCardNumber">Credit Card Number:</label>
                    <input
                        type="text"
                        id="creditCardNumber"
                        name="creditCardNumber"
                        value={billingInfo.creditCardNumber}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="expirationDate">Expiration Date:</label>
                    <input
                        type="text"
                        id="expirationDate"
                        name="expirationDate"
                        value={billingInfo.expirationDate}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cvv">CVV:</label>
                    <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={billingInfo.cvv}
                        onChange={handleInputChange}
                    />
                </div>
                <button className="payment-button" onClick={handlePayment}>
                    Pay Now
                </button>
            </form>
        </div>
    );
}
