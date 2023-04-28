
const reducer = (state,action) =>{
    switch(action.type){
        case"loadingData" : return{
            ...state,
            isLoading: false

        } ;
        case "Get_Update":
            return{
                ...state, 
                isLoading:false,
                hits:action.payload.hitNews,
            }
            
    }
    return state
}
export {reducer};