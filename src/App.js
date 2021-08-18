
import './fonts.css'
import './App.scss';
import { navBar } from './NavBar/NavBar.js'
import { hero } from './Hero/Hero.js'
import { widget } from './Widget/Widget';


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
