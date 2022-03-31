import React from 'react'

type Props = {
    label: String
}

const Button : React.FC<Props> = ({label}) => {
  return (
    <a href='/url' className='w-full bg-slate-800 font-poppins text-sm text-center text-white px-28 py-3 rounded lg:w-auto'>{label}</a>
  )
}


export default Button