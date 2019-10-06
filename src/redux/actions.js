import {createAction} from 'redux-actions'
import api from '../services/api'

/* before redux-actions:
export const ACTION_1 = 'ACTION_1'
export const ACTION_2 = 'ACTION_2'

funtion action1(){
    return {
        type: ACTION_1,
        payload: [10,20,30]
    }
}
funtion action2(){
    return {
        type: ACTION_2,
        payload: [20,30,40]
    }
}
 */
export const handleApiError = createAction('handleApiError')

export const getPostsSuccess = createAction('getPostsSuccess')
//redux thunk permite hacer acciones que se ejecuten asincronamente (currying function)
export const getPosts = () => async dispatch => {
    try{
        const response = await api.posts.get()
        dispatch(getPostsSuccess(response.data))
    }catch(error){
        dispatch(handleApiError(error))
    }
}

export const createPostSuccess = createAction('createPostSuccess')
export const createPost = (data) => async dispatch => {
    try{
        const response = await api.posts.create(data)
        dispatch(createPostSuccess(response.data))
    }catch(error){
        dispatch(handleApiError(error))
    }
}

export const getCommentsSuccess = createAction('getCommentsSuccess')
export const getComments = () => async dispatch => {
    try{
        const response = await api.comments.get()
        dispatch(createCommentSuccess(response.data))
    }catch(error){
        dispatch(handleApiError(error))
    }
}

export const createCommentSuccess = createAction('createCommentSuccess')
export const createComment = (data) => async dispatch => {
    try{
        const response = await api.comments.create(data)
        dispatch(createCommentSuccess(response.data))
    }catch(error){
        dispatch(handleApiError(error))
    }
}


//action2([99]) >> {type:'action2',payload:99}

/* export const action2 = createActions('actionX', (a,b,c,d) => {
    //return only the value of the payload key
    return [5,9]
})
actionX(1,2,3,4)
 */

//const a = action1([1,2,3]) // === {type:'action1',payload:[1,2,3]}