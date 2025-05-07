import './App.css'
import HomePage from './components/HomePage'
import ListCustomers from './components/ListCustomers'
import HeaderComp from './components/HeaderComp'
import FooterComp from './components/FooterComp'
import CustomerComp from './components/CustomerComp'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CustomerPage from './components/CustomerPage'

function App() {

  return (
    <>
    <BrowserRouter>
      <HeaderComp />
      <Routes>
        {/* http://localhost:3000 */}
        <Route path='/' element = { <HomePage />}></Route>
        {/* http://localhost:3000/login */}
        {/* <Route path='/login' element = { <ListCustomers />}></Route> */}
        {/* http://localhost:3000/customers */}
        <Route path='/customers' element = { <ListCustomers />}></Route>
        {/* http://localhost:3000/add-customer */}
        <Route path='/add-customer' element = { <CustomerComp />}></Route>
        {/* http://localhost:3000/update-customer/1 */}
        <Route path='/update-customer/:customerId' element = { <CustomerComp />}></Route>
        {/* http://localhost:3000/dashboard/1 */}
        <Route path='/dashboard/:customerId' element = { <CustomerPage />}></Route>
        
      </Routes>
      <FooterComp />
    </BrowserRouter>
    </>
  )
}

export default App
