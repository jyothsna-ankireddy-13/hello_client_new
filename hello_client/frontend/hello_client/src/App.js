import { Routes,Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProjectOverview from './components/ProjectOverview';
import Expences from './components/Expences';



function App() {
  
  return (
    <>
      
        <Routes>
          
            <Route path='/log' element={<Login/>}/>
            <Route exact path='/dashboard' element={<Dashboard/>}/>
            <Route exact path='/projectoverview' element={<ProjectOverview/>}/>
            <Route path='/expences' element={<Expences/>}/>
        </Routes>
    </>
  );
}

export default App;
