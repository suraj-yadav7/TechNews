import React, {useEffect}from 'react'

const Stories = () => {
    let api = "https://hn.algolia.com/api/v1/search?query=python";
    const fetchApiData = async(url)=>{
        let fetchApi = await fetch(url)
        let data = await fetchApi.json()
        }

    useEffect((api)=>{
        let apiCall= fetchApiData(api)
        console.log(apiCall)
    },[])
  return (
    <>
      <div className='storeis'>
        Stories
      </div>
    </>
  )
}

export default Stories
