import {useContext, createContext, useEffect, useReducer} from "react"
import {reducer} from './reducer'

const AppContext = createContext();
let api = "https://hn.algolia.com/api/v1/search?";
const initial = {
    hits:[],
    page:0,
    nbPages:0,
    query:"",
    isLoading:true
}

const AppProvider = ({children})=>{

    const [state, dispatch] = useReducer(reducer, initial)

    const fetchApiData = async(url)=>{
        dispatch({
            type:"loadingData",
        })
        try{
            let fetchApi = await fetch(url)
            let data = await fetchApi.json()
            console.log(data)
            dispatch({
                type:"Get_Update",
                payload:{
                    hitNews:data.hits,
                    pg:data.page,
                    nbPg: data.nbPages
                }
            })
        }
        catch(error){
            console.log(error)
        } 
        }

        //removing post
        const removePost = (objectID) =>{
                    dispatch({
                        type:"remove_post",
                        payload: objectID
                    })
        }   

    //Search Post
    const searchPost = ((searchVal)=>{
        // searchVal.preventDefault()
        dispatch({
        type:"SEARCH_POST",
        payload: searchVal
        })
    })

    //Previous Page
    const prevPage=()=>{
        dispatch({
            type:"PREV_PAGE"
        })
    }
    const nextPage=()=>{
        dispatch({
            type:"NEXT_PAGE"
        })
    }
    useEffect(()=>{
         fetchApiData(`${api}query=${state.query}&&page=${state.page}`)
     
    },[state.query, state.page])


    return(
        <AppContext.Provider value= {{...state, removePost, searchPost,prevPage,nextPage}} >{children}</AppContext.Provider>
    )
};

//Custom hook to provide appContext and useContext

const useGlobalContext = ()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider, useGlobalContext}