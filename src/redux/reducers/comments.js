import {handleActions} from 'redux-actions'
import {createCommentSuccess, getCommentsSuccess,handleApiError} from '../actions'

export default handleActions({
    [createCommentSuccess]: (state,action) =>{
        return [...state,action.payload]
    },
    [getCommentsSuccess]: (state,action) =>{
        return action.payload
    },
    [handleApiError]: (state,action) => {
        return console.log('Manejar Error')
    }
},[])

/* Before redux-actions

export default function comments(state={},action){
    switch(action.type){
        case 'ACTION_1':
            return [1,2,3]
        case 'ACTION_2':
            return [4,5,6]
        default:
            return state
    }
    return state
} */