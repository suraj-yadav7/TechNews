import {useContext, createContext, useEffect, useReducer} from "react"

const AppContext = createContext();
let api = "https://hn.algolia.com/api/v1/search?query=python";
const initial = {
    hits:[],
    page:0,
    nbPages:0,
    query:"python"
}

const AppProvider = ({children})=>{

    const [state, dispatch] = useReducer(reducer, initial)

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


    return(
        <AppContext.Provider value="frontend end engineer">{children}</AppContext.Provider>
    )
};

//Custom hook to provide appContext and useContext

const useGlobalContext = ()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider, useGlobalContext}