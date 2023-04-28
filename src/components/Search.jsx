import React from 'react'
import { useGlobalContext } from '../context'

const Search = () => {
  const { query, searchPost, prevPage, nextPage, nbPages, page } = useGlobalContext()
  return (
    <>
    <nav className='navbar'>
      <h1>TECH NEWS</h1>
    </nav>
      <div className='searchMain'>
        <div className='formContainer'>
          <form onSubmit={(e) => e.preventDefault()}>
            <input className='searchInput' type="search" placeholder='Search Tech News' value={query} onChange={(e) => searchPost(e.target.value)}></input>
          </form>
        </div>
        <div className='pagination'>
          <button onClick={prevPage} >Prev</button>
          <span>{page + 1} of {nbPages}</span>
          <button onClick={nextPage} >Next</button>
        </div>
      </div>
    </>
  )
}

export default Search
