import {useState, useEffect} from 'react'

export default function Error({children}) {
  return (
          <div className='bg-red-500 text-white text-center p-3
          uppercase font-bold mb-3 rounded shadow-md opacity-60'>
          {children}
          </div>
  )
}
