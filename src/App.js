import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import ProductListing from './components/productListing';
import ProductDetail from './components/productDetail';

function App() {
  return (
    <div >
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route>404 not found</Route>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
