import React , { useState , useEffect } from 'react'
import Button from './Button'
function Input({birthDay , setBirthDay , setIsLucky , setDisplay}) {
    const [currentDate , setCurrentDate] = useState('')
    const [lucky , setLucky] = useState('')
    const changeDateHandler = (e) => {
        console.log(e.target.value)
        setBirthDay(e.target.value)
    }
    const luckyChangeHandler = (e) => {
        setLucky(parseInt(e.target.value) || '')
    }
    useEffect(() => {
        const todayDate = () => {
            const today = new Date();
            let dd = today.getDate();
            
            let mm = today.getMonth()+1; 
            const yyyy = today.getFullYear();
            if(dd<10) 
            {
                dd='0'+dd;
            } 
            
            if(mm<10) 
            {
                mm='0'+mm;
            } 
        setCurrentDate(yyyy  + '-'+ mm  + '-' + dd);
        }
        todayDate()
    },[currentDate])
    return (
        <form>
            <input onChange = {changeDateHandler} type="date" max = {currentDate} value = {birthDay}/>
            <input onChange = {luckyChangeHandler} type="number" value = {lucky} placeholder = 'enter your lucky number'/>
                {/* {currentDate}
                {birthDay} */}
            <Button setBirthDay = {setBirthDay} birthDay = {birthDay} lucky = {lucky} setLucky = {setLucky} setIsLucky = {setIsLucky} setDisplay = {setDisplay}/>    
        </form>
    )
}

export default Input