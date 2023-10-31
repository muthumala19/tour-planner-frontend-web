import {getAuth, onAuthStateChanged} from "firebase/auth";
import React, {useEffect, useState} from 'react';
import './settings_screen.css';
import {db} from "../configurations/firebase_configurations";
import {doc, getDoc, setDoc} from "firebase/firestore";
import CircularProgress from "@mui/material/CircularProgress";

export default function SettingsScreen() {
    const [loading, setLoading] = useState(false);
    const [uid, setUid] = useState(null);
    const [email, setEmail] = useState('');
    const [profile, setProfile] = useState({
        fullname: '',
        email: '',
        mobile: '',
        phone: '',
        address: '',
    });
    const [socialMedia, setSocialMedia] = useState({
        twitter: '',
        website: '',
        instagram: '',
        facebook: '',
    });
    const [payment, setPayment] = useState({
        creditCard: '',
        expiration: '',
        cvv: '',
    });


    const handleProfileChange = (e) => {
        const {id, value} = e.target;
        setProfile({...profile, [id]: value});
    };

    const clearProfile = () => {
        setProfile({
            fullname: '',
            email: email,
            mobile: '',
            phone: '',
            address: '',
        });
    };

    const handleSocialMediaChange = (e) => {
        const {id, value} = e.target;
        setSocialMedia({...socialMedia, [id]: value});
    };

    const clearSocialMedia = () => {
        setSocialMedia({
            twitter: '',
            instagram: '',
            website: '',
            facebook: '',
        });
    };

    const fetchData = async () => {
        try {
            const docRef = doc(db, "userData", uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data();
                setProfile({
                    fullname: data.fullname,
                    email: email,
                    mobile: data.mobile,
                    phone: data.phone,
                    address: data.address,
                });
                setSocialMedia({
                    twitter: data.twitter,
                    instagram: data.instagram,
                    facebook: data.facebook,
                    website: data.website,
                });
                setPayment({
                    creditCard: data.creditCard,
                    expiration: data.expiration,
                    cvv: data.cvv,
                });
            }
        } catch (e) {
            console.error("Error fetching document: ", e);
        }
    };

    const handlePaymentChange = (e) => {
        const {id, value} = e.target;
        setPayment({...payment, [id]: value});
    };

    const clearPayment = () => {
        setPayment({
            creditCard: '',
            expiration: '',
            cvv: '',
        });
    };

    async function saveDetails() {
        if (!uid) {
            console.error("User is not authenticated.");
            alert("User is not authenticated.");
            return;
        }
        setLoading(true);
        try {
            const ref = doc(db, "userData", uid);
            await setDoc(ref, {
                fullname: profile.fullname,
                email: profile.email,
                mobile: profile.mobile,
                phone: profile.phone,
                address: profile.address,
                twitter: socialMedia.twitter,
                instagram: socialMedia.instagram,
                facebook: socialMedia.facebook,
                website: socialMedia.website,
                creditCard: payment.creditCard,
                expiration: payment.expiration,
                cvv: payment.cvv,
            });
            console.log("Document written with ID: ", uid);
        } catch (e) {
            console.error("Error adding document: ", e);
            alert("Error adding document: " + e.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        // Use an effect to retrieve the user's UID when the component mounts
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUid(user.uid);
                setEmail(user.email);
            }
        });
    }, []);

    useEffect(() => {
        // Use another effect to fetch user data when the UID changes
        if (uid) {
            fetchData().then(r => console.log("Data fetched"));
        }
    }, [uid]);// The empty dependency array ensures this effect runs once when the component mounts

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
                        disabled
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
                    {loading ? <CircularProgress/> :
                        <button className="save-button profile-button" type="submit" onClick={saveDetails}>
                            Save
                        </button>}
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
                <div className="form-group">
                    <label htmlFor="website">Website URL :</label>
                    <input
                        type="url"
                        id="website"
                        className="input-field"
                        value={socialMedia.website}
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
                    {loading ? <CircularProgress/> :
                        <button className="save-button profile-button" type="submit" onClick={saveDetails}>
                            Save
                        </button>}
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
                    {loading ? <CircularProgress/> :
                        <button className="save-button profile-button" type="submit" onClick={saveDetails}>
                            Save
                        </button>}
                </div>
            </section>
        </div>
    );
}
