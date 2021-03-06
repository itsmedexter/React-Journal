import React, { useState, Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import {useHistory} from 'react-router-dom';
import "./Signup.css";
// import Home from "./Home";


function Signup(props)
 {
     const [username, setUsername] = useState();
     const [password, setPassword] = useState();
     const history = useHistory();

     const handleSubmit = e => {
         e.preventDefault();
         let data = {
             email: username,
             password: password
         };

         API.saveUser(data).then(results => {
             console.log(props, results);
             
             props.setUserId(results.data._id);
            //  localstoreage for user
             localStorage.setItem("temp", results.data._id);
             console.log(results.data._id);
             // what to do after user is created? 
            history.push("/home");
         })
        //  e.target.value = null;
    
        //  console.log("username is " + username);
        //  console.log("password is " + password);
     };

// getUser() {
//     this.setUserId = JSON.parse(localStorage.setUserId("id"));

//     if (localStorage.setUserId("id")) {
//         this.setState({
//             email: this.user
//         })
//     }
// }

     return (
         <div className="container-2">
         <div className="logincontainer">
             <div className="mt-4">
                 <h4>New User Sign Up</h4>
             </div>
             <form onSubmit={handleSubmit}>
                 <Container className="mt-3 px-5">
                     <Row className="mt-3 px-5">
                         <Col size="md-12">
                             <input
                             className="form-control"
                             type="text"
                             placeholder="Email Here"
                             name="username"
                             value={username}
                             onChange={e => setUsername(e.target.value)}
                             />
                         </Col>
                     </Row>
                     <Row className="form-group">
                         <Col size="md-12">
                             <input
                             className="form-control"
                             type="password"
                             placeholder="Your Password"
                             name="password"
                             value={password}
                             onChange={e => setPassword(e.target.value)}
                             />
                         </Col>
                     </Row>
                     <button className="btn enterbutton" type="submit">Enter</button><br />
                     {/* <button className="btn createbutton" type="submit">Create New User</button> */}

                 </Container>
                 {/* <Container className="mt-4">
                     <h5>Username Test: {username}</h5>
                     <h5>Password Test: {password}</h5>
                 </Container> */}
                 
             </form>
         </div>
         </div>
     );
 };

 export default Signup;




//  user logs in capture user's ID (global variable)
// later when user creates memory, memory get added to the database with user's id
// find user and memory by global variable