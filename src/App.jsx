import { BrowserRouter, Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './pages/Home'
import Destination from './pages/Destination'
import PrivateTour from './pages/PrivateTour'
import SingleTour from './pages/SingleTour'
import TourList from './pages/TourList'
import LayoutPage from './pages/LayoutPage';


function App() {

  return (
    <>

     <BrowserRouter>
     <Routes>
      <Route path='/' element={<LayoutPage/>} >
      <Route index element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/destination' element={<Destination/>} />
      <Route path='/privatetour' element={<PrivateTour/>} />
      <Route path='/singletour' element={<SingleTour/>} />
      <Route path='/tourlist' element={<TourList/>} />
      </Route>
    </Routes>
     </BrowserRouter>
      
    </>
  )
}

export default App
