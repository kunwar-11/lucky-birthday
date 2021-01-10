import React from 'react'

function Output({isLucky , isDisplay}) {
    return (
        <div className = {`${isDisplay ? 'display' : 'not-display'}`}>
            {isLucky ? <p>your birthday is lucky</p> : <p>unfortunately your birthday is not lucky</p>}
        </div>
    )
}

export default Output
