import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './containers/home'
import Contact from './containers/contact'
import Skills from './containers/skills'
import About from './containers/about'


function App() {
  

  return (
   
      <div className="App">
        <Routes>
          <Route index path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/skills' element={<Skills/>}/>
        </Routes>
      </div>
     
   
  )
}

export default App
