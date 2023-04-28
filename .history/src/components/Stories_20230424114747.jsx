import React, {useEffect}from 'react'

const Stories = () => {
    let api = "https://hn.algolia.com/api/v1/search?query=python";
    const fetchApiData = async(url)=>{
        try{
            let fetchApi = await fetch(url)
            let data = await fetchApi.json()
        }
        catch(error){
            console.log(error)
        } 
        }

    useEffect(()=>{
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
