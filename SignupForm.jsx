import React, { useState } from 'react';

function SignupForm({ onSignup }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSignup(username, email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign up</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.valuevalue)} />
      </label>
      <br />
      <button type="submit">Log in</button>
    </form>
  );
}

export default SignupForm;

