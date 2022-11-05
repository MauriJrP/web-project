import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Register from './pages/RegisterPage/Register';
import Home from './pages/HomePage/Home';
import Login from './pages/Loginpage/Login';
import Products from './pages/ProductsPage/Products';

import {AuthProvider} from './context/Auth/AuthProvider';

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/web-project" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          {/* <Route path="/products/:id" element={<Product/>} /> */}
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}