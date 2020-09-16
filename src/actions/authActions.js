import axios from 'axios';
import history from "../history";

export default function login(data) {
        return axios.post('http://localhost:8080/authenticate', data).then(res => {
            if(res.status === 200) {
                const token = res.data.token;
                localStorage.setItem('jwtToken', token)
                history.push("/dashboard")
            }
        });
}
