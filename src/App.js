import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ErrorPage from './Components/ErrorPage'
import OpenWeather from './Components/OpenWeather'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<OpenWeather />}/>
        <Route exact path='*' element={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

