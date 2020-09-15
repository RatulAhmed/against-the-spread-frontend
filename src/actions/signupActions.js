import axios from 'axios';



export function userSignupRequest(userData) {
        return axios.post('http://localhost:8080/signup', userData)
    }

export default userSignupRequest;