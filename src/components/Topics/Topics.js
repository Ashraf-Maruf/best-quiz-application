import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css';
const Topics = () => {
    const topics = useLoaderData();
    return (
        <div className='topics-area'>
            <Container>
                <Row>
                    <Col lg={12}>
                        <Row xs={1} md={2} lg={3} xl={3} xxl={3} className="g-4 justify-content-center">
                            {
                                topics.data.map(topic => <Topic
                                    key={topic.id}
                                    topic={topic}
                                ></Topic>)
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Topics;