import { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');

  return (
    <div style={{ padding: '20px' }}>
      <h1>Contact Us</h1>

      <input
        type="text"
        value={name}
        placeholder="Your Name"
        onChange={(e) => setName(e.target.value)}
        style={{ display: 'block', marginBottom: '10px' }}
      />

      <button onClick={() => alert('Form submitted!')}>
        Send Message
      </button>
    </div>
  );
}

export default Contact;
