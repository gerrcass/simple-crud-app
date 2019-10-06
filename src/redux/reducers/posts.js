import {handleActions} from 'redux-actions'
import {createPostSuccess,getPostsSuccess,handleApiError} from '../actions'

/* function actionHandler(state,action){
    return [1,2,3]
} */

export default handleActions({
    //la action funciona aqui abajo asi a pesar de que es una funcion porque utiliza el metodo toString()
    [createPostSuccess]: (state,action) =>{
        return [...state,action.payload]
    },
    [getPostsSuccess]: (state,action) =>{
        return action.payload
    },
    [handleApiError]: (state,action) => {
        return console.log('Manejar Error')
    }
},[])