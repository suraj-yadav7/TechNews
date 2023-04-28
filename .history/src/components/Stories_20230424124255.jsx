import React, {useEffect}from 'react'
import { useGlobalContext } from '../Context/context.jsx';

const Stories = () => {
    const value1= useGlobalContext()
    
  return (
    <>
      <div className='storeis'>
        Stories : {value1}
      </div>
    </>
  )
}

export default Stories
