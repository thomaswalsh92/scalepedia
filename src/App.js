
import './fonts.css'
import './App.scss';
import { navBar } from './NavBar/NavBar.js'
import { hero } from './Hero/Hero.js'
import { main } from './Main/Main.js'


function App() {
  return (
    <div className='app'>
    {navBar()}
    {hero()}
    {main()}
    </div>
  );
}

export default App;
