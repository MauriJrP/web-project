import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import CreateAccount from './pages/Createanaccountpage/CreateAccount';
import Home from './pages/HomePage/Home';
import Login from './pages/Loginpage/Login';
import Products from './pages/ProductsPage/Products';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/web-project" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/createAccount" element={<CreateAccount/>} />
      </Routes>
    </Router>
  )
}