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
            axios.get("/api/user")
            .then((response) => {
              console.log("Raspuns la navigare:")
              console.log(response)
              return true
            })
            .catch((errors) => {
                console.log("Raspuns la navigare:")
              console.log(errors)
              router.push("/")
              return false
            })
        })
        .catch((errors) => {
            console.log(errors);
            return false;
        })
    }
}

export default LoginService;