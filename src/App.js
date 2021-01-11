import React , {useState} from 'react'
import Input from './component/Input'
import Output from './component/Output'
import Footer from './component/Footer'
import './styles/App.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSun , faMoon} from '@fortawesome/free-solid-svg-icons'
function App() {
  const [birthDay , setBirthDay] = useState('')
  const [isLucky , setIsLucky] = useState(false)
  const [isDisplay , setDisplay] = useState(false)
  const [fullDate , setFullDate] = useState('')
  const [isDark , setIsDark] = useState(false)
  const changeThemeHandler = () => {
    setIsDark(!isDark)
  }
  return (
    <div className={`App ${isDark ? 'dark' : ''}`}>
      <h2 onClick = {changeThemeHandler}>{isDark ? <FontAwesomeIcon icon = {faSun}/> : <FontAwesomeIcon icon = {faMoon}/>}</h2>
      <h1>Are you lucky ? </h1>
      <h5>None of your personal information is stored with us feel free to use this website</h5>
      <Input birthDay = {birthDay} setBirthDay = {setBirthDay}  setIsLucky = {setIsLucky} setDisplay = {setDisplay} setFullDate = {setFullDate} isDark = {isDark}/>
      <Output isLucky = {isLucky} isDisplay = {isDisplay} fullDate = {fullDate} isDark = {isDark}/>
      <Footer isDark = {isDark}/>
    </div>
  );
}

export default App;
