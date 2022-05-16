import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import ProductHome from './components/ProductHome';
import Product from './components/Product';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProductHome />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
