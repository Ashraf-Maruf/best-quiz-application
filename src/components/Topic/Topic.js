import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Topic.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faEye } from '@fortawesome/free-solid-svg-icons'
const Topic = ({ topic }) => {
    const {id,name,logo,total} = topic
    return (
        <Card className='me-3 p-3' style={{ width: '18rem'}}>
            <Card.Img variant="top" src={logo}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <small>Total: {total}</small>
                </Card.Text>
                <Link className='btn btn-primary' to={`/topics/${id}`}>Start Practice<FontAwesomeIcon className='ms-2' icon={faArrowRight}></FontAwesomeIcon></Link>
            </Card.Body>
        </Card>
    );
};

export default Topic;