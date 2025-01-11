
import { Route, Routes } from 'react-router'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import History from './pages/History'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  

  return (
    <>
    {/* Header */}
    <Header/>

     {/* path for landing,home and history */}
     <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/history' element={<History/>}/>
     </Routes>


     {/* Footer */}
     <Footer/>
    </>
  )
}

export default App
