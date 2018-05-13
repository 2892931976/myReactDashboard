import axios from "axios";

export function loadUsers(){
    return(dispatch) =>{
        return axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
            dispatch(getMoreUsers(response.data))
        })
    }
}

export function getMoreUsers(object) {
    return {
        type: "GET_MORE_USERS",
        data: object
    }
}