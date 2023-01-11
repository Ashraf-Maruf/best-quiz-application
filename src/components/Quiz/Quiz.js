import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Button, Container } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

const Quiz = ({ quiz }) => {
    const {question, correctAnswer } = quiz
    
   const heandleaddQuiz = options => {
        if (options === correctAnswer) {
            toast("This is true",{
                position:"top-center",
                autoClose:1000,
            })
        } else if (options !== correctAnswer) {            
            toast("This is false",{
                position:"top-center",
                autoClose:1000,
            })
        }
    }
    const heandleShowResult = (correctAnswer) =>{
        toast(correctAnswer,{
            position:"top-center",
            autoClose:1000,
        })
    }
    return (        
        <Container className='d-flex justify-content-center'>            
            <Card className='shadow rounded mb-4' style={{ width: '40rem' }}>                    
                <Card.Body>
                    <Card.Title>        
                        {question.substring(3,question.length-4)}
                        <Button onClick={() => heandleShowResult(correctAnswer)} className='ms-3 mt-2'><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></Button>  
                    </Card.Title> 
                    <Card.Text>
                        {
                            quiz.options.map(option =>
                                <Button className='button-item m-2 w-50' onClick={() => heandleaddQuiz(option)}
                                    key={option}
                                >    
                                {option}                                
                                </Button>                              
                            )
                        }                        
                    </Card.Text>
                </Card.Body>
                <ToastContainer />
            </Card>
        </Container>
    );
};

export default Quiz;
