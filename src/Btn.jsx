import React from 'react'

export default function Btn({name, active, handleClick, isDisable}) {
    // console.log(active)
    return (
        <>
        <button className = {active? "active": ""} onClick = {handleClick} disabled = {isDisable}>{name}</button>
        </>
    )
}
