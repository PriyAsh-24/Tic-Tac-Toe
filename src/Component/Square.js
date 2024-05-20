import React from 'react'

const Square = (props) => {
  return (
    <div
    onClick={props.onClick} 
    className='border border-black h-[100px] w-[100px] flex justify-center items-center'
    >
      <h5>{props.value}</h5>
    </div>
  )
}

export default Square
