import './App.css'
import Header from "./components/Header.jsx";
import Footer from './components/Footer.jsx';
import ContainerCom from './components/ContainerCom.jsx';
import Detail from './components/Detail.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import News from './components/News.jsx';

import { Route, Routes } from 'react-router';

function App() {
  return (

    <>
      <Header />
      <Routes>
        <Route path="/" element={<ContainerCom />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
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
