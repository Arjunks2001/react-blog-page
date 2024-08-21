
import './App.css';
import Blog_list from './components/Blog_list';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import React from 'react' 
import Filtereddatas from './components/Filtereddatas';


function App() {
  return(
<Router>
    <Routes>
      <Route exact path="/" element={<Blog_list />} />
      <Route path="/blog/:title" element={<Filtereddatas/>}/>
    
     

    </Routes>
   </Router> 
  )
   
}

export default App;
