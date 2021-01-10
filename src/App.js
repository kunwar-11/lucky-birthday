import React , {useState} from 'react'
import Input from './component/Input'
import Output from './component/Output'
import Footer from './component/Footer'
import './styles/App.scss'
function App() {
  const [birthDay , setBirthDay] = useState('')
  const [isLucky , setIsLucky] = useState(false)
  const [isDisplay , setDisplay] = useState(false)
  return (
    <div className="App">
      <h2>Are you lucky ?</h2>
      <h3>None of your personal information is stored with us feel free to use this website</h3>
      <Input birthDay = {birthDay} setBirthDay = {setBirthDay}  setIsLucky = {setIsLucky} setDisplay = {setDisplay}/>
      <Output isLucky = {isLucky} isDisplay = {isDisplay}/>
      <Footer />
    </div>
  );
}

export default App;
