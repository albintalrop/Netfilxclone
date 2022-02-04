import logo from './logo.svg';
import './App.css';
import Header from './Componets/Header';
import { ComedyMovies,HorrorMovies,originals,action,RomanceMovies} from '../src/Componets/Urls';
import Spotlight from './Componets/Spotlight';
import Rowposter from './Componets/Rowposter';


function App() {
  return (
    <>
      <Header />
      <Spotlight />
      <Rowposter url={originals} title="Netfilx orginals" />
      <Rowposter url={action} title="Action" isSmall/>
      <Rowposter url={ComedyMovies} title="ComedyMovies" isSmall/>
      <Rowposter url={HorrorMovies} title="HorrorMovies" isSmall/>
      <Rowposter url={RomanceMovies} title="RomanceMovies" isSmall/>
    </>
  
  );
}

export default App;
