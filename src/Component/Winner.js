import React from 'react'

const Winner = (props) => {
  return (
    <div className='flex flex-col text-center justify-center h-[100vh] items-center'>
      <h2 className='font-bold text-2xl p-5 '>{props.Winneris} is Our Winner</h2>
      <button onClick={props.onClick} className='border border-blue-900 bg-blue-400 w-28 items-center rounded-md'>Play Again</button>
    </div>
  )
}

export default Winner
