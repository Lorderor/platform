import React, {useEffect, useState} from 'react'

import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'
import {Field, Form} from "react-final-form";
import {Button, Grid, Paper, Typography} from "@material-ui/core";
import TextFieldAdapter from "../../adapters/TextFieldAdapter";
import styled from "styled-components";

const Login = () => {
    const [firstLogIn, setFirstLogIn] = useState();
    const [loggedIn, setLoggedIn] = useState();
    const navigate = useNavigate();

    // useEffect(()=>{
	// 	if(window.token){
	// 		setLoggedIn(true)
	// 	}
	// },[]);

    useEffect(() => {
        if (loggedIn) {
            if (firstLogIn) {
                navigate('/questionaire')
            } else {
                navigate('/dashboard')
            }
        }
    }, [loggedIn,firstLogIn]);

    const submit = ({name, password}) => {
        //Check if this is the first login
        axios.post('http://127.0.0.1:8103/api/db_last_login', {username: name})
            .then(response => {
                console.log(response);
                setFirstLogIn(response.data == "N/A");
                console.log(firstLogIn);
                axios.post('http://127.0.0.1:8103/api/db_login', {username: name, password})
                    .then(response => {
                        console.log(response);
                        localStorage.setItem('token', response.data);
                        localStorage.setItem('username', (name));
                        console.log(localStorage.getItem('username'));
                        axios.post('http://127.0.0.1:8103/api/db_get_user_type', {username: name})
                            .then(response => {
                                console.log(response);
                                localStorage.setItem('usertype', response.data);
                                setLoggedIn(true);
                                console.log(localStorage.getItem('usertype'))
                            })
                            .catch((error) => {
                                console.log(error)
                            });
                    })
            }).catch((error) => {
            console.log(error)
        });
    };

    return (
        <PaperWrapper elevation={3}>
            <Form onSubmit={submit}>
                {({handleSubmit}) => (
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography align='center' variant='h3'>Добро пожаловать!</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='h5'>Имя пользователя</Typography>
                            <Field label="Имя" component={TextFieldAdapter} name="name"/>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='h5'>Пароль</Typography>
                            <Field label="Пароль" component={TextFieldAdapter} name="password"/>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography align='center' variant='h6'>Нет учетной записи? <Link
                                to={'/login'}>Зарегистрироваться</Link></Typography>
                        </Grid>
                        <Grid container direction="row" justify="center">
                            <Button variant="contained" color="primary" onClick={handleSubmit}>
                                Войти
                            </Button>
                        </Grid>
                    </Grid>
                )}
            </Form>
        </PaperWrapper>
    )
};

const PaperWrapper = styled(Paper)`
padding: 2rem;
`;

export default Login;