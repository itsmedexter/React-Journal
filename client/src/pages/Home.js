import React from "react";
import { Col, Row, Container } from "../components/Grid"
import CreateMemoryForm from "../components/CreateMemoryForm";
import MemoryList from "../components/MemoryList";

const Home = ({userId}) => {
    console.log()
    return (
        <Container>
            <Row>
                <Col size="md-8">
                    <CreateMemoryForm userId={userId} />
                    <MemoryList />
                </Col>
            </Row>
        </Container>
    );
};

export default Home;