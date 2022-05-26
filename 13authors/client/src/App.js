import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import NewAuthor from './components/NewAuthor';
import EditAuthor from './components/EditAuthor.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewAuthor />} />
          <Route path="/edit/:id" element={<EditAuthor />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
