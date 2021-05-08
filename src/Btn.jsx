import React from 'react'

export default function Btn({name, active, handleClick}) {
    // console.log(active)
    return (
        <>
        <button className = {active? "active": ""} onClick = {handleClick}>{name}</button>
        </>
    )
}
