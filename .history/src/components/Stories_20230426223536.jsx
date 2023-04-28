import React, {useEffect}from 'react'
import { useGlobalContext } from '../context'

const Stories = () => {
    const {hits, isLoading}= useGlobalContext()

    if(isLoading){
    return( 
        <div className="Loading">
        <h4>The data is fetching</h4>
        </div>
    )
    }
  return (
    <>
      <div className='storeis'>
       the div
      </div>
        <h2>the stories</h2>
        {hits?.map((story)=>{
          return ( 
          <>
          <div className='stories'>
          <h3>{story.title}</h3>
          <p>by {story.author}   scomment :{story.num_comments} </p> 
          <a href={story.url} target='_blank'>Read More</a>
          </div>
          </>)
          })}
      
    </>
  )
}

export default Stories
