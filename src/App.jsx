import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './containers/home';
import Contact from './containers/contact';
import Skills from './containers/skills';
import About from './containers/about';
import Navbar from './componets/navBar';
import Test from './containers/test';
import { useEffect } from "react";




import Aos from "aos";
import 'aos/dist/aos.css';

function App() {


  useEffect(() => {
    Aos.init({ duration: 1500 });
     }, []);

  return (
    <div className="App">

      <Navbar />

      <div className="App__main-page-content">
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/test' element={<Test />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
