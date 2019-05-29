import axios from 'axios';
import router from "./router"
const url = 'api/login';

class LoginService {

    static getUsers() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(data);
            }catch(err) {
                reject(err);
            }
        })
    }

    static login(username, password) {
        
        axios.post(url, {
            username,
            password,
        }).then((response) => {
            console.log("Logged in")
            router.push("/dashboard")
        })
        .catch((errors) => {
            console.log(errors);
        })
    }
}

export default LoginService;