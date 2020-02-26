import React, { useState } from "react";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import "./Signin.css";




// for login page
// create input email and password 
// create a "login" and "create new user" buttons
// For SignIn, when user inputs email and password and clicks "enter" button, makes an api call with "getUser" then directs them to home page to create new memories
// when user clicks on new user button, directs them to signup page, where user can create a new user with api call "saveUser" and directs them to home page

function SignIn(props)
{
    const [username, getUsername] = useState();
    const [password, getPassword] = useState();


    const handleSubmit = e => {
        e.preventDefault();
        let data = {
            email: username,
            password: password
        };
        console.log(data);
        API.loginUser(data).then(results => {
            // user exists, so...
            if(results.data.length > 0) {
                // ???
                localStorage.setItem("temp", results.data[0]._id);
                window.location.replace("/home");
            }
            // user doesnt exist, so...
            else {
                alert("User does not exist!")
                // window.location.replace("/")
                // ???

            }
            // handle user validation
            // check if user exists
            // if user exists, then...

            // console.log(props, results);
            console.log(results.data);
            // store user data somewhere for session holding or retaining user data
            // use the user's _id
            // window.location.replace("/home")
        })
    };

    return (
        <div className="container-3">
        <div className="logincontainer2">
            <div className="mt-4">
                <h4>Sign In</h4>
            </div>
            <form onSubmit={handleSubmit}>
                <Container className="mt-3 px-5">
                    <Row className="mt-3 px-5">
                        <Col size="md-12">
                            <input
                            className="form-control"
                            type="text"
                            placeholder="Email"
                            name="username"
                            value={username}
                            onChange={e => getUsername(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col size="md-12">
                            <input
                            className="form-control"
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={e => getPassword(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <button className="btn enterbutton" type="submit">Enter</button> <button onClick={() => window.location.replace("/signup") } className="btn createbutton" type="submit">Create New User</button>

                </Container>         
            </form>
        </div>
        </div>
    );
};

export default SignIn;





 