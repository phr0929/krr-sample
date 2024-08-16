import './App.css';
import React, { useEffect } from 'react'
import { Route,Routes,useHistory} from "react-router-dom"
import Main from './Main'
import Krr from './Krr'
import ElliIvy from './ElliIvy'
import Lulu from './Lulu'


function App() {
 

  return (

    <div className='app'>
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/Krr" element={<Krr/>} />
            <Route path="/ElliIvy" element={<ElliIvy/>} />
            <Route path="/Lulu" element={<Lulu/>} />

        </Routes>

    </div>
  );
}

export default App;
