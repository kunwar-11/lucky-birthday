import React from 'react'

function Output({isLucky , isDisplay , fullDate , isDark}) {
    return (
        <div className = {`output`}>
            <div className = {`${isDisplay ? 'display' : 'not-display'}`}>
                <h4>Your BirthDay is : {fullDate}</h4>
                {isLucky ? <h3>your birthday is lucky</h3> : <h3>unfortunately your birthday is not lucky</h3>}
            </div>
        </div>
    )
}

export default Output
