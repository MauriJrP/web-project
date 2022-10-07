import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Products from './pages/ProductsPage/Products';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/web-project" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        {/* <Route path="/support" element={<Support/>} /> */}
      </Routes>
    </Router>
  )
}