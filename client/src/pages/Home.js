import React from "react";
import { Col, Row, Container } from "../components/Grid"
import CreateMemoryForm from "../components/CreateMemoryForm";
import MemoryList from "../components/MemoryList";

const Home = () => {
    return (
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <CreateMemoryForm />
                </Col>
                <Col size="md-6 sm-12">
                    <MemoryList />
                </Col>
            </Row>
        </Container>
    );
};

export default Home;