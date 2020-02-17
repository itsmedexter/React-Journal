import React from "react";
import { Col, Row, Container } from "../components/Grid"
import CreateMemoryForm from "../components/CreateMemoryForm";
import MemoryList from "../components/MemoryList";

const Home = () => {
    return (
        <Container>
            <Row>
                <Col size="md-4">
                    <CreateMemoryForm />
                    <MemoryList />
                </Col>
            </Row>
        </Container>
    );
};

export default Home;