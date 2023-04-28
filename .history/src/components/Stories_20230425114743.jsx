import React, {useEffect}from 'react'
import { useGlobalContext } from '../context'

const Stories = () => {
    const {hits}= useGlobalContext()
    
  return (
    <>
      <div className='storeis'>
        {hits.map((story)=>{
          return (<h3>{story.title}</h3>)
          })}
      </div>
    </>
  )
}

export default Stories
