import React from 'react'
import { useGlobalContext } from '../context'

const Search = () => {
  const {query, searchPost} = useGlobalContext()
  return (
    <>
   <div className='formContainer'>
    <form onSubmit={(e)=>e.preventDefault()}>
      <input type="search" placeholder='Search Your Query' value={query} onChange={(e)=> searchPost(e.target.value)}></input>
    </form>
   </div>
    </>
  )
}

export default Search
