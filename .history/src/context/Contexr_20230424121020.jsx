import {useContext, createContext} from "react"
import App from "../App";

const AppContext = createContext();

const AppProvider = ({children})=>{
    
    return(
        <AppContext.Provider value="frontend end engineer">{children}</AppContext.Provider>
    )
};

//Custom hook to provide appContext and useContext

const useGlobalContext = ()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider}