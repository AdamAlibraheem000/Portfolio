import './index.css'
import {Route, Routes} from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import Projects from './routes/Projects'


function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
    </Routes>
  </>
      
  )
}

export default App
