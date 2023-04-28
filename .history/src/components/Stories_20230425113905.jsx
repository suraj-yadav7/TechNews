import React, {useEffect}from 'react'
import { useGlobalContext } from '../context'

const Stories = () => {
    const [hits]= useGlobalContext()
    
  return (
    <>
      <div className='storeis'>
        {/* {hits.map((index)=>{
          return (<h3>{index.title}</h3>)
          })} */}
      </div>
    </>
  )
}

export default Stories
