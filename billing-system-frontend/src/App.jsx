import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import Body from './component/Body'
import Bill from './component/Bill'
import Store from './component/Store'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import AddItem from './component/AddItem'


function App() {
  

  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/'><Body/></Route>
          <Route path='/showStore'><Store/></Route>
          <Route path='/addItem'><AddItem/></Route>
        </Switch> 
      </Router>
      
    </>
  )
}

export default App
