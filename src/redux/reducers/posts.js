import {handleActions} from 'redux-actions'
import {createPost,getPosts} from '../actions'

/* function actionHandler(state,action){
    return [1,2,3]
} */

export default handleActions({
    //la action funciona aqui abajo asi a pesar de que es una funcion porque utiliza el metodo toString()
    [createPost]: (state,action) =>{
        return [...state,action.payload]
    },
    [getPosts]: (state,action) =>{
        return action.payload
    },
},[])