import React from 'react';
import './Home.css'
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import Topic from '../Topic/Topic';
import { useLoaderData } from 'react-router-dom';
const Home = () => {
    const topics = useLoaderData();
    return (
        <div>
            <div className='back-img'>
                <Container>
                    <div className='text-area'>
                        <div>
                            <h1 className='mb-4'>This is Quizzes</h1>
                            <p>A quiz is a quick and informal assessment of student knowledge. Quizzes are often used in North American higher education environments to briefly test a students level of comprehension regarding course material, providing teachers with insights into student progress and any existing knowledge gaps.</p>
                        </div>
                    </div>
                </Container>
            </div>
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
        </div>
    )
}

export default Home;