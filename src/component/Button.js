import React from 'react'

function Button({setBirthDay ,birthDay}) {
    const clickHandler = (e) => {
        e.preventDefault()
        console.log('from button')
        setBirthDay('')
    }
    return (
       <button onClick = {clickHandler}>
           Submit
       </button>
    )
}

export default Button
