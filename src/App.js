import './App.css';

import { Route, Routes } from 'react-router-dom';
import Missing from "./Components/Missing";

import Unauthorized from "./Components/Unauthorized";
import Home from "./Components/Home";

import Navbar from './Components/Navbar';


function App() {
  return (
    <main className='App'>
      <Navbar />
      <Routes>
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/" element={<Home />} />
        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Routes>
    </main>
  );
}

export default App;
