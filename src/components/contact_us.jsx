import React, {useRef} from 'react';
import './contact_us.css';
// import * as emailjs from "@emailjs/browser";
// import {
//     contact_us_templateId_EmailJS,
//     publicKey_EmailJS,
//     serviceId_EmailJS
// } from "../configurations/email_configurations";

function ContactUs() {
    // const form = useRef();

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // You can implement the submission logic here.
    //     // Access the form data using formData.name, formData.email, and formData.message.
    //     // Reset the form fields after submission.
    //     emailjs.sendForm(serviceId_EmailJS, contact_us_templateId_EmailJS, form.current, publicKey_EmailJS)
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         });

    //     e.target.reset();
    // }

    // const containerStyle = {
    //     display: 'flex',
    //     justifyContent: 'space-between',
    // };

    // const leftColumnStyle = {
    //     flex: '1',
    //     padding: '20px',
    //     borderRight: '1px solid #ccc',
    // };

    // const rightColumnStyle = {
    //     flex: '1',
    //     padding: '20px',
    // };

    // const formStyle = {
    //     maxWidth: '400px',
    //     margin: '0 auto',
    //     padding: '20px',
    //     border: '1px solid #ccc',
    //     borderRadius: '2vh',
    //     backgroundColor: '#f9f9f9',
    // };

    // const inputStyle = {
    //     width: '100%',
    //     padding: '10px',
    //     margin: '10px 0',
    //     border: '1px solid #ccc',
    //     borderRadius: '2vh',
    //     outline: 'none',
    // };

    // const buttonStyle = {
    //     width: '100%',
    //     padding: '10px',
    //     backgroundColor: '#0056b3',
    //     color: 'white',
    //     border: 'none',
    //     borderRadius: '2vh',
    //     cursor: 'pointer',
    // };

    return (
        <div className={'contact_us'}>
            <h1 style={{textAlign: 'center', marginBottom: '20px'}}>Contact Us</h1>
            {/* <div style={containerStyle} className={'contact-us-content'}>
                <div style={leftColumnStyle}>
                    <div className="contact-us-section">
                        <p>
                            Welcome to our Contact Us page. At <b>JourneySync</b>, we value your feedback, inquiries,
                            and the opportunity to assist you. Whether you have questions about our products, services,
                            or you simply want to reach out, this is the right place.
                        </p>

                        <h3>Why Contact Us?</h3>
                        <p>
                            We understand that clear communication is essential for building strong and lasting
                            relationships. Our Contact Us section serves multiple purposes:
                        </p>
                        <ul>
                            <li>
                                <strong>Customer Support:</strong> If you're an existing customer and need assistance
                                with any aspect of our offerings, our support team is ready to help. From
                                troubleshooting issues to guiding you through our services, we're just a message away.
                            </li>
                            <li>
                                <strong>General Inquiries:</strong> If you're new to <b>JourneySync</b> and want to
                                learn more about what we offer, feel free to ask. We're here to provide information
                                about our products, pricing, and any other details you require.
                            </li>
                            <li>
                                <strong>Feedback:</strong> We welcome your feedback, whether it's about your experience
                                with us, ideas for improvement, or suggestions for new features. Your input helps us
                                grow and serve you better.
                            </li>
                        </ul>
                    </div>
                </div>
                <div style={rightColumnStyle}>
                    <form style={formStyle} onSubmit={handleSubmit} ref={form}>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input
                                style={inputStyle}
                                type="text"
                                id="name"
                                name="name"
                                required
                            />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input
                                style={inputStyle}
                                type="email"
                                id="email"
                                name="email"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message">Message:</label>
                            <textarea
                                style={inputStyle}
                                id="message"
                                name="message"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <button style={buttonStyle} type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div> */}
        </div>
    );
}

export default ContactUs;
