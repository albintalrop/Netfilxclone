import logo from './logo.svg';
import './App.css';
import Header from './Componets/Header';
import { ComedyMovies,HorrorMovies,originals,action,RomanceMovies} from '../src/Componets/Urls';
import Spotlight from './Componets/Spotlight';
import Rowposter from './Componets/Rowposter';
import Loginpage from './Componets/Login/Loginpage';
import { BrowserRouter as Router,Route, Routes, Link} from "react-router-dom";
import Home from './Componets/Home';
import Singnuppage from './Componets/Signup/Singnuppage';


function App() {
  return (
    <>
     
     
      <Router>
        <Routes>
          
          {/* <Route path="/" exact element={<Loginpage/>} />
            <Route path="/signuppage" element={<Singnuppage/>} /> */}
            <Route path="/" element={<Home/>} />
          
        </Routes>
       
      </Router>
      </>
      
 
  
  );
}

export default App;
