import React from 'react'
import { useGlobalContext } from '../context'

const Stories = () => {
  const { hits, isLoading, removePost } = useGlobalContext()



  if (isLoading) {
    return (
  <div className="Loading">
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
        <div className='footer'>
          <footer>
          <span>Copyright © 2023 Switch Workflow.</span>
          <span>Privacy Policy</span>
          <span>Terms of Use</span>
          </footer>
        </div>
      </div>
    </>
  )
}

export default Stories
