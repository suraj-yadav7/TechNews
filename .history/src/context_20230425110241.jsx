import {useContext, createContext, useEffect, useReducer} from "react"
import {reducer} from './reducer'

const AppContext = createContext();
let api = "https://hn.algolia.com/api/v1/search?";
const initial = {
    hits:[],
    page:0,
    nbPages:0,
    query:"python",
    isLoading:true
}

const AppProvider = ({children})=>{

    const [state, dispatch] = useReducer(reducer, initial)

    const fetchApiData = async(url)=>{
        try{
            let fetchApi = await fetch(url)
            let data = await fetchApi.json()
            console.log("The fetch news", data)
        }
        catch(error){
            console.log(error)
        } 
        }

    useEffect(()=>{
         fetchApiData(`${api}query=${state.query}&page=${state.page}`)
     
    },[])


    return(
        <AppContext.Provider value="frontend end engineer">{children}</AppContext.Provider>
    )
};

//Custom hook to provide appContext and useContext

const useGlobalContext = ()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider, useGlobalContext}