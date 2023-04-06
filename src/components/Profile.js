import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function Profile() {
    const { user } = useSelector(state => state.loginState)

    return (
        <Container>
            <Row className="justify-content-around mt-5 user-info mb-5">
                <Col xs={12} md={3}>
                    <img className="rounded-circle img-fluid" src={user[0].ProfilePic} alt="test" />
                </Col>
                <Col xs={12} md={3}>
                    <h4>Full Name</h4>
                    <p>{user[0].name}</p>
                    <h4>E-mail</h4>
                    <p>{user[0].email}</p>
                    <h4>Joined</h4>
                    <p>{user[0].CreatedAt}</p>
                    <Link className="btn btn-danger mt-5" style={{ display: "block", width: "100%" }}>
                        My Orders
                    </Link>
                    <Link className="btn btn-primary mt-3" style={{ display: "block", width: "100%" }}>
                        Change Password
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Profile