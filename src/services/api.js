import axios  from 'axios'

const api = axios.create({
    baseURL: 'https://andrenas-fastfood-api.herokuapp.com'
})

export default api;