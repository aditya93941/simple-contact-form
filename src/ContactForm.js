import React, { Component } from 'react';
import './App.css';

class ContactForm extends Component {
  state = {
    userName: '', 
    userEmail: '',
    userMessage: '', 
    successMessage: '',
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.userName && this.state.userEmail && this.state.userMessage) {
      this.setState({ 
        successMessage: 'Thank you! Your message has been received.',
        userName: '',
        userEmail: '',
        userMessage: ''
      });

      setTimeout(() => {
        this.setState({ successMessage: '' });
      }, 5000);
    } else {
      alert("Please complete all fields before submitting.");
    }
  };

  render() {
    const { userName, userEmail, userMessage, successMessage } = this.state;

    return (
      <div className="contact-form-container">
        <h2 className='heading'>Contact Us</h2>
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <label htmlFor="userName">Name:</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={userName}
              onChange={this.handleInputChange}
              required
              aria-label="Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="userEmail">Email:</label>
            <input
              type="email"
              id="userEmail"
              name="userEmail"
              value={userEmail}
              onChange={this.handleInputChange}
              required
              aria-label="Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="userMessage">Message:</label>
            <textarea
              id="userMessage"
              name="userMessage"
              value={userMessage}
              onChange={this.handleInputChange}
              required
              aria-label="Message"
            />
          </div>
          <button type="submit" className='submit-button'>Submit</button>
        </form>
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    );
  }
}

export default ContactForm;
