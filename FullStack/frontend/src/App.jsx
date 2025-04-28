import './App.css'
import ListCustomers from './components/ListCustomers'
import HeaderComp from './components/HeaderComp'
import FooterComp from './components/FooterComp'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <HeaderComp />
      <Routes>
        {/* http://localhost:3000 */}
        <Route path='/' element = { <ListCustomers />}></Route>
        {/* http://localhost:3000/customers */}
        <Route path='/customers' element = { <ListCustomers />}></Route>
      </Routes>
      <FooterComp />
    </BrowserRouter>
    </>
  )
}

export default App
