import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Quizdetails.css'
const Quizdetails = () => {
    const quizs = useLoaderData()
    return (
        <div className='Quizdetails-area'>
            <Container className='mt-5'>
                <div className='mb-5 pb-4'>
                    <h1>Quiz of {quizs.data.name}</h1>
                </div>
                <Row>
                    <Col lg={12}>
                        <Row xs={1} md={1} lg={2} xl={2} xxl={2} className="g-4 d-flex justify-content-center">
                            {
                                quizs.data.questions.map(quiz => <Quiz

                                    key={quiz.id}
                                    quiz={quiz}

                                ></Quiz>)
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Quizdetails;