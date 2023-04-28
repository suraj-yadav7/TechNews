
const reducer = (state,action) =>{
    switch(action.type){
        case "Get_Update":
            return{
                ...state, hits:action.payload.hitNews,
                
            }
    }
}
export {reducer};