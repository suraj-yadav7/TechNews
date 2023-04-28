import React, {useEffect}from 'react'
import { useGlobalContext } from '../context'

const Stories = () => {
    const {hits, isLoading,removePost}= useGlobalContext()



    if(isLoading){
    return( 
        <div className="Loading">
        <h4>The data is fetching</h4>
        </div>
    )
    }
  return (
    <>
      <div className='parentStory'>
       the div
      
        <h2>the stories</h2>
        {hits?.map((story)=>{
          const {objectID} = story
          return ( 
          <>
          <div className='stories' key={objectID}>
          <h3>{story.title}</h3>
          <p>by <span>{story.author}</span>  | <span>comment: {story.num_comments} </span></p>
          <div className="storiesButton">
          <a  href={story.url} target='_blank' rel="noreferrer">Read More</a>
          <a  target='_blank' rel="noreferrer" onClick={()=>removePost(objectID)} >Remove</a>
            </div> 
          </div>
          </>)
          })}
      </div>
    </>
  )
}

export default Stories
