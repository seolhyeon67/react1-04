
import './App.css';
import Main from './contents/main.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Battlero from './battlero/battlero.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/battlero' element={<Battlero/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
