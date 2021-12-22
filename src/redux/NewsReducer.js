import {NEWS} from "./type";


const initialState = {
    news: []
}

export const NewsReducer = (state = initialState, action) => {
    switch (action.type){
        case NEWS:
            return {
                ...state,
                news: action.jsonData
            }
        default:
            return state;
    }
}