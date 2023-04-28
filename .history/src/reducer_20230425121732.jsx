
const reducer = (state,action) =>{
    switch(action.type){
        case"loadingData" : return{
            ...state,
            isloading: true

        } ;
        case "Get_Update":
            return{
                ...state, 
                isloading:false,
                hits:action.payload.hitNews,
            }
            
    }
    return state
}
export {reducer};