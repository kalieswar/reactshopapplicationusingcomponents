import axios from "axios"
import { loginRequest, loginSuccess, loginFail } from "../slices/loginSlice";




export const login = ({ email, password }) => async (dispatch) => {

    dispatch(loginRequest())
    const { data } = await axios.get(`http://localhost:3001/users?email=${email}`);
    if (data[0] === undefined) {
        alert('Login Failed')
        dispatch(loginFail())   
    } else {
        if (data[0].password === password) {
            alert('Logged in Successfully')
            dispatch(loginSuccess(data))
        } if(data[0].password !== password){
            alert('Password Wrong')
            dispatch(loginFail())
        }
    }
}
