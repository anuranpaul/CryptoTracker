import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Coin from './Pages/Coin'
import ComparePage from './Pages/ComparePage'
import WatchList from './Pages/WatchList'

function App() {
 
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/dashboard" element={<Dashboard/>}></Route>
    <Route path="/coin/:id" element={<Coin/>}></Route>
     <Route path="/compare" element={<ComparePage/>}></Route>
   <Route path="/watchlist" element={<WatchList/>}></Route> 
   </Routes>
   </BrowserRouter>
  )
}

export default App
