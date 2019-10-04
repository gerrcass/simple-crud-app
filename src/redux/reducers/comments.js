import {handleActions} from 'redux-actions'
import {createComment, getComments} from '../actions'

export default handleActions({
    [createComment]: (state,action) =>{
        return [...state,action.payload]
    },
    [getComments]: (state,action) =>{
        return action.payload
    },
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