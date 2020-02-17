import React, { useState } from "react";
import { Col, Row, Container } from "../components/Grid";

function Signup()
 {
     const [username, setUsername] = useState();
     const [password, setPassword] = useState();

     const handleSubmit = e => {
         e.preventDefault();
         console.log("username is " + username);
         console.log("password is " + password);
     };

     return (
         <div>
             <div className="mt-4">
                 <h3>Sign In</h3>
             </div>
             <form onSubmit={handleSubmit}>
                 <Container className="mt-3 px-5">
                     <Row className="mt-3 px-5">
                         <Col size="3">
                             <input
                             className="form-control"
                             type="text"
                             placeholder="Username"
                             name="username"
                             value={username}
                             onChange={e => setUsername(e.target.value)}
                             />
                         </Col>
                     </Row>
                     <Row className="form-group">
                         <Col size="3">
                             <input
                             className="form-control"
                             type="password"
                             placeholder="Password"
                             name="password"
                             value={password}
                             onChange={e => setPassword(e.target.value)}
                             />
                         </Col>
                     </Row>
                     <button className="btn btn-success" type="submit">Enter</button><br />
                     <button className="btn btn-secondary mt-2" type="submit">Create New User</button>

                 </Container>
                 <Container className="mt-4">
                     <h5>Username Test: {username}</h5>
                     <h5>Password Test: {password}</h5>
                 </Container>
                 
             </form>
         </div>
     );
 };

 export default Signup;