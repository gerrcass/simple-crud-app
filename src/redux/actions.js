import {createAction} from 'redux-actions'

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
export const createPost = createAction('createPost')
export const getPosts = createAction('getPosts')

export const createComment = createAction('createComment')
export const getComments = createAction('getComments')

//action2([99]) >> {type:'action2',payload:99}

/* export const action2 = createActions('actionX', (a,b,c,d) => {
    //return only the value of the payload key
    return [5,9]
})
actionX(1,2,3,4)
 */

//const a = action1([1,2,3]) // === {type:'action1',payload:[1,2,3]}