
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
                nbPages:action.payload.nbPg
            }

        case "remove_post":
            return{
                ...state, hits: state.hits.filter((post)=> post.objectID !== action.payload)
            }

            case "SEARCH_POST":
                return{
                    ...state, query: action.payload
                }
            
    }
    return state
}
export {reducer};