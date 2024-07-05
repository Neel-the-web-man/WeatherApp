import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar.jsx"
import Section1 from './components/Section1.jsx'
import Section2 from './components/Section2.jsx'
import Section3 from './components/Section3.jsx'
import Section4 from './components/Section4.jsx'
import Section5 from './components/Section5.jsx'
import Footer from './components/Footer.jsx'
function App() {
  const [Loc, setLoc] = useState("");
  const getLoc=(data)=>{
    setLoc(data);
  }
  return (
    <>
    <Navbar/>
    <Section1/>
    <Section2 passLoc={getLoc}/>
    <Section3 passLocData={Loc}/>
    <Section4 passLocData={Loc}/>
    <Section5 passLocData={Loc}/>
    <Footer/>
    </>
  )
}

export default App
