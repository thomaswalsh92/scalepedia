
import './fonts.css'
import './App.scss';
import { navBar } from './NavBar/navBar.js'
import { hero } from './Hero/hero.js'
import { widget } from './Widget/widget';


function App() {
  return (
    <div className='app'>
    {navBar()}
    {hero()}
      <div className='main'>
      {widget()}
      </div>
    </div>
  );
}

export default App;
