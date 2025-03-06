import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import HomeScreen from './screens/HomeScreen';


function App() {
  return (
    <>
  <Header/>
  <main>
    <Container>
    <Outlet/>
    </Container>
  </main>
  <Footer/>
  <ToastContainer/>
  </>
  )
}

export default App
