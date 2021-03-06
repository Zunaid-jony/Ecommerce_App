
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
            <Form>
                <Form.Group className='mb-3' controlId='email'>
                    <Form.Label>Email</Form.Label> 
                    <Form.Control type='email' required></Form.Control>

                </Form.Group>
                {/* pssword */}
                <Form.Group className='mb-3' controlId='password'>
                    <Form.Label>Password</Form.Label> 
                    <Form.Control type='passwoed' required></Form.Control>
                    <div className='mb-3'>
                        <Button type="submit"> Login.</Button>
                    </div>
                    <div className='mb-3'>
                        New Customer?{''}
                        <Link to={`/signup?redirect=${redirect}`}> Create your account</Link>

                    </div>

                </Form.Group>
            </Form>
            
        </Container>
       </div>
    );
};

export default SigninScreen;