
const reducer = (state,action) =>{
    switch(action.type){
        case"loadingData" : return{
            ...state,
            isLoading: true

        } ;
        case "Get_Update":
            return{
                ...state, 
                isLoading:false,
                hits:action.payload.hitNews,
            }

        case "remove_post":
            return{
                ...state, hits: state.hits.filter((post)=> post.objectID !== action.payload)
            }
            
    }
    return state
}
export {reducer};