import React from 'react'

function Button({setBirthDay ,birthDay , lucky , setLucky , setIsLucky , setDisplay}) {
    const clickHandler = (e) => {
        e.preventDefault()
        const dateArr = birthDay.split('-');
        console.log(dateArr)
        let fullDate = parseInt(`${dateArr[2]}${dateArr[1]}${dateArr[0]}`)
        // const dd = parseInt(dateArr[2]);
        // const mm = parseInt(dateArr[1]);;
        // const yyyy = parseInt(dateArr[0]);
        let sum = 0;
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
    return (
       <button onClick = {clickHandler}>
           Submit
       </button>
    )
}

export default Button
