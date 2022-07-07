
import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const SigninScreen = () => {
    const {search} = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect')
    const redirect = redirectInUrl ? redirectInUrl : '/';
    return (
       <div style={{width:'40%', marginLeft:'30%'}}>
            <Container className='small-container'>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <h1 className='my-3' style={{ textAlign: 'center'}}> Login</h1>
           
            
        </Container>
       </div>
    );
};

export default SigninScreen;