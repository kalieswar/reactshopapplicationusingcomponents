import TextField from '@mui/material/TextField';
import { Row, Col } from "react-bootstrap";
import Button from "@mui/material/Button"

function SignUp (){
    return(
        <Row className="justify-content-center">
            <Col xs={10} lg={5} className="paddingg">
            <form className="shadow-lg p-4">  
            <TextField className="form-control mb-3"  label="User Name" variant="outlined"/>
            <TextField className="form-control mb-3"  label="Email" variant="outlined"/>
            <TextField type={'password'} className="form-control mb-3" label="Password" variant="outlined"/>
            <TextField type={'password'} className="form-control mb-3" label="Confirm Password" variant="outlined"/>
            <Button variant="contained" className="w-100" color="success">
        Sign UP
      </Button>
        </form>
            </Col>
        </Row>
    )
}

export default SignUp;