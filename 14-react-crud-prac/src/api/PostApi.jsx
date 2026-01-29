import axios from 'axios'

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getPost = () => {
    return api.get('/posts')
}

export const deletePost = (id) => {
    return axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
}

export const addPost = (postData)=>{
    return axios.post(`https://jsonplaceholder.typicode.com/posts`, postData)
}