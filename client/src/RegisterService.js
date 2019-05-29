import axios from 'axios';

const url = 'api/register';

class RegisterService {

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

    static insertUser(username, email, password, birthDate, userTypeId, groupId) {
        return axios.post(url, {
            username,
            email,
            password,
            birthDate,
            userTypeId,
            groupId
        });
    }
}

export default RegisterService;