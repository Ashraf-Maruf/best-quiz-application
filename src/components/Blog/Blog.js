import React from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Blog.css'
const Blog = () => {
    return (
        <div className='blog-area'>
            <Container>
                <Row>
                    <h1 className='mb-4'>Three questions answers</h1>
                    <Col lg={6}>
                        <div className='blog-text shadow rounded mb-4'>
                            <h1>What is the purpose of react router?</h1>
                            <p>Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
                                React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.</p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className='blog-text shadow rounded mb-4'>
                            <h1>How does context api work?</h1>
                            <p>Context allows passing data through the component tree without passing props down manually at every level.In React application, we passed data in a top-down approach via props. Sometimes it is inconvenient for certain types of props that are required by many components in the React application. Context provides a way to pass values between components without explicitly passing a prop through every level of the component tree.</p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className='blog-text shadow rounded'>
                            <h1>React useRef Hook</h1>
                            <p>Hooks are the new feature introduced in the React 16.8 version. It allows you to use state and other React features without writing a class. Hooks are the functions which "hook into" React state and lifecycle features from function components. It does not work inside classes.Hooks are backward-compatible, which means it does not contain any breaking changes. Also, it does not replace your knowledge of React concepts.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blog;