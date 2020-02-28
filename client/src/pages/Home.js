import React from "react";
import { Col, Row, Container } from "../components/Grid"
import CreateMemoryForm from "../components/CreateMemoryForm";
import MemoryList from "../components/MemoryList";
import "./homestyle.css";

const Home = ({userId}) => {
    console.log()
    return (
        <Container>
            <Row><div className="box2">
                <div className="box1">
                <Col size="md-12">
                    <CreateMemoryForm userId={userId} />
                    <MemoryList />
                </Col>
                </div>
                </div>
            </Row>
            
        </Container>
    );
};

export default Home;