
const reducer = (state,action) =>{
    switch(action.type){
        case"loadingData" : return{
            ...state,
            isloading: true

        } ;
        case "Get_Update":
            return{
                ...state, 
                hits:action.payload.hitNews,
                
            }
            
    }
    return state
}
export {reducer};