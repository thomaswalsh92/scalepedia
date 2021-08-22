
import './fonts.css'
import './App.scss';
import { NavBar } from './NavBar/NavBar.js'
import { Hero } from './Hero/Hero.js'
import { Widget } from './Widget/Widget';


function App() {
  return (
    <div className='app'>
    <NavBar />
    <Hero />
      <div className='main'>
      <Widget />
      </div>
    </div>
  );
}

export default App;
