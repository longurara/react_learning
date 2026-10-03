import './App.css'
import Header from "./components/Header.jsx";
import Footer from './components/Footer.jsx';
import ContainerCom from './components/ContainerCom.jsx';
import StateDemo from './components/StateDemo.jsx';
import StateFunc from './components/StateFunc.jsx';
import EffectCase from './components/EffectCase.jsx';
import HomePage from './components/homePage.jsx';

import { Route, Routes } from 'react-router';

function App() {
  return (
    
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/list" element={<ContainerCom/>}/>
      </Routes>
    </>

  )
}



// function Com1() {
//   return (<Com2/>)
// }
// function Com2() {
//   return (<Com3/>)
// }
// function Com3() {
//   const valueFromMyMoney = useContext(myMoney)
//   return (<p>money: {valueFromMyMoney}</p>)
// }

export default App
