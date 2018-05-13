let defaultState = {
    data: ""
}

const mainReducer = (state=defaultState, action)=>{
    if(action.type=="GET_MORE_USERS"){
        return {
            ...state,
            data:action.data
        }
    } else {
        return{
            ...state
        }
    }
}

export default mainReducer