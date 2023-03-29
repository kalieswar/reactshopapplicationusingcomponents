import './App.css';
import Footer from './components/Footer';
import Navbars from './components/Navbar';
import Product from './components/Products';

function App() {
  return (
    <div className='app'>
      <Navbars />
      <Product/>
      <Footer />
    </div>
  );
}

export default App;
