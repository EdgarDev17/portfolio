import React from 'react'

 const P: React.FC = ({children}) => {
  return (
    <p className='mt-7 text-justify font-poppins leading-7 text-slate-900 lg:mt-10'>{children}</p>
  )
}

export default P