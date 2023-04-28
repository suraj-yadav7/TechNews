import React, {useEffect}from 'react'
import { useGlobalContext } from '../context'

const Stories = () => {
    const {hits}= useGlobalContext()
    
  return (
    <>
      <div className='storeis'>
       the div
      </div>
        <h2>the stories</h2>
        {hits?.map((story)=>{
          return (<h3>{story}</h3>)
          })}
      
    </>
  )
}

export default Stories
