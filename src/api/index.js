import axios from 'axios'

const service = axios.create({
    timeout: 3000
})
//request interceptors
//response interceptors
export default service