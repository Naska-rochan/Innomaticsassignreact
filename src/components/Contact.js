import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name) {
      newErrors.name = 'Name is required.';
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message) {
      newErrors.message = 'Message is required.';
    }

    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Mock API submission
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: { 'Content-Type': 'application/json' },
        });

        const data = await response.json();
        setSubmitStatus('Form submitted successfully!');
        console.log('Response:', data);
      } catch (error) {
        setSubmitStatus('Form submission failed.');
        console.error('Error:', error);
      }
    } else {
      setSubmitStatus('Please fix the errors above.');
    }
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="form-group">
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Your Name" 
          className="form-control mb-2"
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder="Your Email" 
          className="form-control mb-2"
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

        <textarea 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          placeholder="Your Message" 
          className="form-control mb-2"
        />
        {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      {submitStatus && <p>{submitStatus}</p>}
    </div>
  );
}

export default Contact;
