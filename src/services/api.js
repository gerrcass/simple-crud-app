import axios from 'axios'

const resquestHelper = axios.create({
    baseURL:'http://localhost:4000'
})

export default {
    posts:{
        get: () => resquestHelper({
            url:'posts',
            method:'get',
        }),
        create: data => resquestHelper({
            url:'posts',
            method:'post',
            data
        })
    },
    comments:{
        get: () => resquestHelper({
            url:'comments',
            method:'get',
        }),
        create: data => resquestHelper({
            url:'comments',
            method:'post',
            data
        })
    }
}