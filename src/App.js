
import './fonts.css'
import './App.scss';
import { navBar } from './NavBar/NavBar.js'
import { hero } from './Hero/Hero.js'
import { widget } from './Widget/Widget.js'


function App() {
  return (
    <div className='app'>
    {navBar()}
    {hero()}
    {widget()}
    </div>
  );
}

export default App;
