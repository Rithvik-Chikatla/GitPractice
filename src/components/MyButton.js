import React from 'react'
// import { useState } from 'react'

const MyButton = ({count, handleClick}) => {
    return (
        <>
            <button onClick={handleClick}>Click Me!</button>
            <p>Clicked {count} times</p>
        </>
    )
}
export default MyButton