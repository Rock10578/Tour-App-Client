import { MDBBtn, MDBCard, MDBCardBody, MDBCardFooter, MDBIcon, MDBInput, MDBValidation } from 'mdb-react-ui-kit';
import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const [formValues, setFormValues] = React.useState({
        email: "",
        password: "",
    });
    const {email, password } = formValues;
    const handleSubmit = () => {};
    const onInputChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };
  return (
    <div
        style={{
            margin: "auto",
            padding: "80px",
            maxWidth: 450,
            marginTop: 120,
            alignContent: "center"
        }}>
            <MDBCard alignment="center">
                <MDBIcon fas icon="user-circle" className="fa-2x"/>
                <h5>Sign In</h5>
                <MDBCardBody alignment="center">
                    <MDBValidation onSubmit={handleSubmit} className="row g-3">
                        <div className="col-md-12">
                            <MDBInput 
                                label = "Email"
                                type = "email"
                                value = {email}
                                name = "email"
                                onChange={onInputChange}
                                required
                                invlaid
                                validation = "Please Provide your email"
                            />
                        </div>
                        <div>
                            <MDBInput 
                                label = "Password"
                                type = "password"
                                value = {password}
                                name = "password"
                                onChange={onInputChange}
                                required
                                invlaid
                                validation = "Please Provide your Password"
                            />
                        </div>
                        <div className="col-md-12">
                            <MDBBtn style={{ width: "100%" }} className="mt-2">
                                Login
                            </MDBBtn>
                        </div>
                    </MDBValidation>
                </MDBCardBody>
                <MDBCardFooter>
                    <Link to={"/register"}>
                        <p>Don't have an Account ? Signup</p>
                    </Link>
                </MDBCardFooter>
            </MDBCard>
    </div>
  )
}

export default Login