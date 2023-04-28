
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
        
        case "PREV_PAGE":
            let pageNum=state.page-1
            if(pageNum<=0){
                pageNum=0
            }
            return{
                 ...state, 
                    page:pageNum
                }
            
        
        case "NEXT_PAGE":
            let pageNum2= state.page+1
            if(pageNum2>=50){
                pageNum2=0
            }

            return{
                ...state, 
                page:pageNum2
            }
        
    }
    return state
}
export {reducer};