import React from 'react';
import Header from './Header';
import Loginpage from './Login/Loginpage';
import Rowposter from './Rowposter';
import Spotlight from './Spotlight';
import { ComedyMovies,HorrorMovies,originals,action,RomanceMovies} from '../Componets/Urls';
function Home() {
  return <div>
        <Header />
        <Spotlight />
        <Rowposter url={originals} title="Netfilx orginals" />
        <Rowposter url={action} title="Action" isSmall/>
        <Rowposter url={ComedyMovies} title="ComedyMovies" isSmall/>
        <Rowposter url={HorrorMovies} title="HorrorMovies" isSmall/>
        <Rowposter url={RomanceMovies} title="RomanceMovies" isSmall/>
    </div>;
}

export default Home;

