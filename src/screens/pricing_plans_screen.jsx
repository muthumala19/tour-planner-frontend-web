import React from 'react';
import './pricing_plans.css'; // Link to your CSS file

export default function PricingPlanScreen() {
    function handleClick() {
    }

    return (
        <div className="pricing-plans">
            <h1 className="plan-heading">Our Pricing Plans</h1>
            <div className="plans-container">
                <div className="plan">
                    <h3 className="plan-title">Basic Plan</h3>
                    <p className="plan-description">Perfect for individual travelers</p>
                    <p className="plan-price">$49/month</p>
                    <ul className="plan-features">
                        <li>Access to Basic Features</li>
                        <li>24/7 Customer Support</li>
                    </ul>
                    <div className="plan-button-group">
                        <button className="select-button">Select Plan</button>
                    </div>
                </div>

                <div className="plan">
                    <h3 className="plan-title">Pro Plan</h3>
                    <p className="plan-description">For small groups and families</p>
                    <p className="plan-price">$79/month</p>
                    <ul className="plan-features">
                        <li>Everything in Basic Plan</li>
                        <li>Group Booking Options</li>
                        <li>Customized Itineraries</li>
                    </ul>
                    <div className="plan-button-group">
                        <button className="select-button" onClick={handleClick}>Select Plan</button>
                    </div>
                </div>

                <div className="plan">
                    <h3 className="plan-title">Premium Plan</h3>
                    <p className="plan-description">For large groups and businesses</p>
                    <p className="plan-price">$129/month</p>
                    <ul className="plan-features">
                        <li>Everything in Pro Plan</li>
                        <li>Priority Support</li>
                        <li>Advanced Analytics</li>
                    </ul>
                    <div className="plan-button-group">
                        <button className="select-button">Select Plan</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
