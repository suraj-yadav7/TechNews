import React from 'react'
import { useGlobalContext } from '../context'

const Search = () => {
  const {query, searchPost,prevPage,nextPage, nbPages,page} = useGlobalContext()
  return (
    <>
   <div className='formContainer'>
    <form onSubmit={(e)=>e.preventDefault()}>
      <input type="search" placeholder='Search Your Query' value={query} onChange={(e)=> searchPost(e.target.value)}></input>
    </form>
   </div>
   <div className='pagination'>
    <button onClick={prevPage} >Prev</button>
     <span>{page+1} of {nbPages}</span> 
    <button onClick={nextPage} >Next</button>
   </div>
    </>
  )
}

export default Search
