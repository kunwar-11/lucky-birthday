import React from 'react'

function Button({setBirthDay ,birthDay , lucky , setLucky , setIsLucky , setDisplay , setFullDate , isDark}) {
    const clickHandler = (e) => {
        e.preventDefault()
        let fullDate
        let sum = 0;
        const dateArr = birthDay.split('-');
        if(dateArr.length === 3) {
        fullDate = parseInt(`${dateArr[2]}${dateArr[1]}${dateArr[0]}`)
        //setFullDate(toString(fullDate))
        console.log(fullDate)
        setFullDate(`${dateArr[2]} - ${dateArr[1]} - ${dateArr[0]}`)
        // const dd = parseInt(dateArr[2]);
        // const mm = parseInt(dateArr[1]);;
        // const yyyy = parseInt(dateArr[0]);
        
        while(fullDate !== 0) {
            sum += fullDate%10;
            fullDate = Math.floor(fullDate/10);
        }
        console.log(sum%lucky)
        if(sum % lucky === 0) {
            setIsLucky(true)
        }
        else {
            setIsLucky(false)
        }
        setDisplay(true) 
        setBirthDay('')
        setLucky('')
    }
    else {
        setDisplay(false)
        setBirthDay('')
        setLucky('')
    }
} 
    return (
       <button className = {`${isDark ? 'darkBtn' : ''}`} onClick = {clickHandler}>
           Submit
       </button>
    )
}

export default Button
