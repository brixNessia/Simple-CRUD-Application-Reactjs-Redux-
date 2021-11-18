import axios from 'axios'

// create new instance
const Http = axios.create()

// set default config
Http.defaults.baseURL = 'http://127.0.0.1:8000/api'
Http.defaults.headers.common.Accept = 'application/json'

export default Http
