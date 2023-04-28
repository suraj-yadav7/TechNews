import React from 'react'
import { useGlobalContext } from '../context'

const Stories = () => {
  const { hits, isLoading, removePost } = useGlobalContext()



  if (isLoading) {
    return (
  <div className="Loading" style={{ color:"yellow", height:"100vh",backgroundImage: "linear-gradient(to right, #DECBA4, #3E5151)"}}>
        <h4>The data is fetching</h4>
      </div>
    )
  }
  return (
    <>
      <div className='parentStory'>
        <h2>Latest Tech News</h2>
        {hits?.map((story) => {
          const { objectID } = story
          return (
            <>
              <div className='stories' key={objectID}>
                <h3>{story.title}</h3>
                <p>by <span>{story.author}</span>  | <span>comment: {story.num_comments} </span></p>
                  <div className="storiesButton">
                  <a href={story.url} target='_blank' rel="noreferrer"><button >Read More</button></a>
                  <button onClick={() => removePost(objectID)} >Remove</button>
                </div>
              </div>
            </>)
        })}
      </div>
    </>
  )
}

export default Stories
