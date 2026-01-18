import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();        // ✔ ALX requires this
    alert('Form submitted!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>   {/* ✔ ALX requires onSubmit */}
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Your Name"
          onChange={handleChange}
          style={{ display: 'block', marginBottom: '10px' }}
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Your Email"
          onChange={handleChange}
          style={{ display: 'block', marginBottom: '10px' }}
        />

        <textarea
          name="message"
          value={formData.message}
          placeholder="Your Message"
          onChange={handleChange}
          style={{ display: 'block', marginBottom: '10px' }}
        />

        <button type="submit">Send Message</button>   {/* ✔ submit button */}
      </form>
    </div>
  );
}

export default Contact;
