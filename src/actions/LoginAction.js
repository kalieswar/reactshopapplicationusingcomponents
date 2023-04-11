import axios from "axios"
import { loginRequest, loginSuccess, loginFail } from "../slices/loginSlice";




export const login = ({ email, password, error }) => async (dispatch) => {

    dispatch(loginRequest())
    const { data } = await axios.get(`http://localhost:3001/users?email=${email}`);
    if (data[0] === undefined) {
        dispatch(loginFail(error))   
    } else {
        if (data[0].password === password) {
            dispatch(loginSuccess(data))
        } if(data[0].password !== password){
            dispatch(loginFail(error))
        }
    }
}
