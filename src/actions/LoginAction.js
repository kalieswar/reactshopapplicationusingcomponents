import { loginEmailFail, loginEmailSuccess, loginPasswordFail, loginPasswordSuccess } from "../slices/loginSlice"


export const login = ({email, password}) => (dispatch)=>{
    if(!email){
        const emailErrorMsg = "Email should not be empty"
        dispatch(loginEmailFail(emailErrorMsg))
    } else{
        dispatch(loginEmailSuccess())
    }

    if(!password){
        const passwordErrorMsg = "Password must"
        dispatch(loginPasswordFail(passwordErrorMsg))
    }else if(password.length > 8){
        const passwordErrorMsg = "password cannot exceed 8 characters"
        dispatch(loginPasswordFail(passwordErrorMsg))
    }else {
        dispatch(loginPasswordSuccess())
    }
}