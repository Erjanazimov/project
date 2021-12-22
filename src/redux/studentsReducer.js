import {IMAGES_GET} from "./type";


const initialState = {
    images: []
}

export const studentReducer = (state = initialState, action) => {
    switch (action.type){
        case IMAGES_GET:

            const images = action.jsonImg.map(item => {
                return {
                    original: item.images,
                    thumbnail: item.images
                }
            })

            return {
                ...state,
                images: images
            }
        default:
            return state;
    }
}