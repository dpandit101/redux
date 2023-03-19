import React from 'react'

export const User = (props) => {
console.log(props)
const {name,age,year}=props.data
  return (
    <div>
        <h1>New user component</h1>
        <h3>{name}</h3>
        <h3>{age}</h3>
        <h3>{year}</h3>
    </div>
  )
}
