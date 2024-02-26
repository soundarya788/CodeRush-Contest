import {BrowserRouter,Route,Routes} from "react-router-dom";
import React from 'react'
import Homepage from './components/Homepage'
import Quizpage from "./components/Quizpage";
import Completion from "./components/Completion";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/Quizpage" element={<Quizpage/>}/>
        <Route path="/Completion" element={<Completion/>}/>
      </Routes>
      </BrowserRouter>
    
    
    
    </div>
  )
}

export default App
