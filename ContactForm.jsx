import React, { useState } from 'react';

const ContactForm = ({ agentEmail }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const mailtoLink = `mailto:${agentEmail}?subject=Property Inquiry&body=${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" value={message} onChange={(event) => setMessage(event.target.value)} required></textarea>
      </div>
      <button type="submit">Send Email</button>
    </form>
  );
};

export default ContactForm;


