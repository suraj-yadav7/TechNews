import React, {useEffect}from 'react'
import { useGlobalContext } from '../context'

const Stories = () => {
    const [hits]= useGlobalContext()
    
  return (
    <>
      <div className='storeis'>
        {hits.map((index)=>(
          <h3>{index}</h3>
        ))}
      </div>
    </>
  )
}

export default Stories
