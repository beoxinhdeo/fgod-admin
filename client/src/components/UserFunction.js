import axios from 'axios'
import User from 'views/User'

export const register = newUser => {
    return axios
    .post('user/register',{
        EMAIL : newUser.EMAIL,
        PASS : newUser.PASS,
        MAQUYEN : newUser.MAQUYEN,
        TRANGTHAI : newUser.TRANGTHAI
    }).then(res => {
        console.log("Registered");
        
    })
}
export const login = nhanvien => {
    return axios
    .post('user/login',
    {
        EMAIL: nhanvien.EMAIL,
        PASS: nhanvien.PASS
    })
    .then(res => {
        localStorage.setItem('usertoken',res.data)
        return res.data
    })
    .catch(err => {
        console.log(err);
    })
}

