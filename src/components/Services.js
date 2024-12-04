import { Link, Route, Routes } from 'react-router-dom';

function Services() {
  return (
    <div>
      <h1>Our Services</h1>
      <nav>
        <Link to="design">Design</Link> | 
        <Link to="development">Development</Link>
      </nav>

      <Routes>
        <Route path="design" element={<div><h3>Design Services</h3><p>We provide top-notch design services.</p></div>} />
        <Route path="development" element={<div><h3>Development Services</h3><p>We specialize in full-stack development.</p></div>} />
      </Routes>
    </div>
  );
}

export default Services;
