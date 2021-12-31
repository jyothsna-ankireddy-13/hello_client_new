import { Routes,Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard'



function App() {
  
  return (
    <>
      
        <Routes>
          
        <Route path='/log' element={<Login/>}/>
            <Route exact path='/dashboard' element={<Dashboard/>}/>
          
          
        </Routes>
      
      
    
    
    </>
  );
}

export default App;
