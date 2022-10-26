import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Course from '../../components/Course/Course';
import LeftSideNav from '../../components/LeftsideNav/LeftsideNav';

const CourseInitial = () => {
    return (
        <Container>
            <Row>
                <Col lg="4 d-none d-lg-block">
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col lg="8">
                    <Course></Course>
                </Col>
            </Row>

        </Container>
    );
};

export default CourseInitial;