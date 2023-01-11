import React from 'react';
import './Statistics.css'
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const statistic = useLoaderData()
    return (
        <div className='statistics-area'>
            <Container>
                <Row>
                    <Col xs={12} md={12} lg={12} xl={12} xxl={12}>
                        <Row className="d-flex justify-content-center">
                            <h1 className='mb-5'>This is Chart</h1>
                            <div className='me-5' style={{ width: '100%', height: '500px' }}>
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart width={730} height={250} data={statistic.data}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Statistics;