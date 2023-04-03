import './App.css';
import Footer from './components/Footer';
import Navbars from './components/Navbar';
import Product from './components/Products';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import { Error } from './components/Error';
import { Login } from './components/Login';
import ProtectedRoute from './components/route/ProtectedRoute';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Address from './components/Address';
import OrderDetails from './components/OrderDetails';


function App() {
  return (
    <div className='app'>
      <Router>
      <Navbars />
      <Routes>
        <Route path='/Home' element={<ProtectedRoute><Product/></ProtectedRoute>}/>
        <Route path='/product/:id' element={<ProductDetail/>}/>
        <Route path='/cart'element={<Cart/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path="/shipping" element={<Address/>}/>
        <Route path='/orderdetails' element={<OrderDetails/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>

      <Footer />
      </Router>
    </div>
  );
}

export default App;
