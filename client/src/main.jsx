import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes,Route  } from "react-router-dom";

import store from './app/store'
import { Provider } from 'react-redux'

import './index.css'

import NavBar from "./components/Navbar/NavBar.jsx"
import Footer from "./components/Footer/Footer.jsx"

import App from './App.jsx'
import CreateRubric from './pages/CreateRubric/CreateRubric.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <NavBar />
      <section className='site-content'>

      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/create-rubric' element={<CreateRubric />}></Route>
      </Routes>
      </section>
      <Footer />

    </Router>
  </Provider>,
)
