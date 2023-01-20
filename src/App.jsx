import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Forminput from './comp/forminput'
import List from './comp/list'
import Footer from './comp/Footer'
import { Dataprovider } from './comp/dataprovider'

function App() {


  return (
    <Dataprovider>
      <div className="App">
        <h1>to do list context</h1>
        <Forminput/>
        <List/>
        <Footer/>
      </div>
    </Dataprovider>
  )
}

export default App
