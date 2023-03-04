import React from 'react'

const Error = ({ children }) => {
  return (
    <div>
      <p className='bg-red-300 text-center p-3 font-bold uppercase mb-3 rounded-md'>
        {children}
      </p>
    </div>
  )
}

export default Error
