import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <div className='container'>
        <div className="contactus-container">
            <h1>Contact Us</h1>
            <p>
                We'd love to hear from you.please fill out the form below or reach out to us using the contact details Provided.
            </p>
            <form className='contact-form'>
                <div className="form-group">
                <label htmlFor="name">Name :</label>
                <input type="text" id='name' name='name' required />
                </div>
                <div className="form-group">
                <label htmlFor="email">Email :</label>
                <input type="text" id='email' name='email' required />
                </div>
                <div className="form-group">
                <label htmlFor="message">Message :</label>
                <textarea name="message" id="message"  rows="5" required></textarea>
                </div>
                <button type='Submit' className='submit-btn'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact