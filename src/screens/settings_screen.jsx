import React, {useState} from 'react';
import './settings_screen.css';

export default function SettingsScreen() {
    // State variables to store form data
    const [profile, setProfile] = useState({
        fullname: '',
        email: '',
        mobile: '',
        phone: '',
        address: '',
    });

    const [socialMedia, setSocialMedia] = useState({
        twitter: '',
        instagram: '',
        facebook: '',
    });

    const [payment, setPayment] = useState({
        creditCard: '',
        expiration: '',
        cvv: '',
    });

    // Function to handle changes in the profile section
    const handleProfileChange = (e) => {
        const {id, value} = e.target;
        setProfile({...profile, [id]: value});
    };

    // Function to clear the profile section
    const clearProfile = () => {
        setProfile({
            fullname: '',
            email: '',
            mobile: '',
            phone: '',
            address: '',
        });
    };

    // Function to handle changes in the social media section
    const handleSocialMediaChange = (e) => {
        const {id, value} = e.target;
        setSocialMedia({...socialMedia, [id]: value});
    };

    // Function to clear the social media section
    const clearSocialMedia = () => {
        setSocialMedia({
            twitter: '',
            instagram: '',
            facebook: '',
        });
    };

    // Function to handle changes in the payment section
    const handlePaymentChange = (e) => {
        const {id, value} = e.target;
        setPayment({...payment, [id]: value});
    };

    // Function to clear the payment section
    const clearPayment = () => {
        setPayment({
            creditCard: '',
            expiration: '',
            cvv: '',
        });
    };

    return (
        <div className="settings-container">
            <h2>Settings</h2>
            <section className="profile-section">
                <h3>Profile</h3>
                <div className="form-group">
                    <label htmlFor="fullname">Full Name:</label>
                    <input
                        type="text"
                        id="fullname"
                        className="input-field"
                        value={profile.fullname}
                        onChange={handleProfileChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className="input-field"
                        value={profile.email}
                        onChange={handleProfileChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="mobile">Mobile:</label>
                    <input
                        type="tel"
                        id="mobile"
                        className="input-field"
                        value={profile.mobile}
                        onChange={handleProfileChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="tel"
                        id="phone"
                        className="input-field"
                        value={profile.phone}
                        onChange={handleProfileChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <textarea
                        id="address"
                        className="input-field"
                        rows="3"
                        value={profile.address}
                        onChange={handleProfileChange}
                    ></textarea>
                </div>
                <div className="button-group">
                    <button
                        className="clear-button profile-button"
                        type="button"
                        onClick={clearProfile}
                    >
                        Clear
                    </button>
                    <button className="save-button profile-button" type="submit">
                        Save
                    </button>
                </div>
            </section>
            <hr className="section-divider"/>
            <section className="social-media-section">
                <h3>Social Media</h3>
                <div className="form-group">
                    <label htmlFor="twitter">Twitter Link:</label>
                    <input
                        type="url"
                        id="twitter"
                        className="input-field"
                        value={socialMedia.twitter}
                        onChange={handleSocialMediaChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="instagram">Instagram Link:</label>
                    <input
                        type="url"
                        id="instagram"
                        className="input-field"
                        value={socialMedia.instagram}
                        onChange={handleSocialMediaChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="facebook">Facebook Link:</label>
                    <input
                        type="url"
                        id="facebook"
                        className="input-field"
                        value={socialMedia.facebook}
                        onChange={handleSocialMediaChange}
                    />
                </div>
                <div className="button-group">
                    <button
                        className="clear-button social-media-button"
                        type="button"
                        onClick={clearSocialMedia}
                    >
                        Clear
                    </button>
                    <button className="save-button social-media-button" type="submit">
                        Save
                    </button>
                </div>
            </section>
            <hr className="section-divider"/>
            <section className="payment-section">
                <h3>Payment Information</h3>
                <div className="form-group">
                    <label htmlFor="creditCard">Credit Card:</label>
                    <input
                        type="text"
                        id="creditCard"
                        className="input-field"
                        value={payment.creditCard}
                        onChange={handlePaymentChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="expiration">Expiration Date:</label>
                    <input
                        type="text"
                        id="expiration"
                        className="input-field"
                        value={payment.expiration}
                        onChange={handlePaymentChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cvv">CVV:</label>
                    <input
                        type="text"
                        id="cvv"
                        className="input-field"
                        value={payment.cvv}
                        onChange={handlePaymentChange}
                    />
                </div>
                <div className="button-group">
                    <button
                        className="clear-button payment-button"
                        type="button"
                        onClick={clearPayment}
                    >
                        Clear
                    </button>
                    <button className="save-button payment-button" type="submit">
                        Save
                    </button>
                </div>
            </section>
        </div>
    );
}
