
import './App.css'
import Header from './component/Header'
import Body from './component/Body'
import Bill from './component/Bill'
import Store from './component/Store'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import AddItem from './component/AddItem'
import EditItem from './component/EditItem'
import Checkbill from './component/Checkbill'
import Order from './component/Order'


function App() {
  

  return (
    <>
      <Router>
        
        <div>
          <Header/>
          <Routes >
            <Route exact path='/'     element={<Body/>} />
            <Route path='/showStore'  element={<Store/>} />
            <Route path='/addItem'    element={<AddItem/>} />
            <Route path='/editItem'   element={<EditItem/>} />
            <Route path='/bill'       element={<Bill/>} />
            <Route path='/checkBill'  element={<Checkbill/>} />
            <Route path='/order'      element={<Order/>} />
          </Routes> 
        </div>

      </Router>
      
    </>
  )
}

export default App
