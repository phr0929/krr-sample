import './App.css';
import React, { useEffect } from 'react'
import { Route,Routes,useHistory} from "react-router-dom"
import Main from './Main'
import Krr from './Krr'
import Hiup from './Hiup'
import Lulu from './Lulu'

function App() {
  
  return (
    <div className='app'>
        <Routes>
            <Route path="/" element={<Main/>} />

            <Route path="/Krr" element={<Krr/>} />
            <Route path="/Hiup" element={<Hiup/>} />
            <Route path="/Lulu" element={<Lulu/>} />

        </Routes>

    </div>
  );
}

export default App;
