import {useState} from 'react';
import axios from 'axios';
import {Typography, Paper, Grid,Button} from '@material-ui/core';
import {Form, Field} from 'react-final-form';
import TextFieldAdapter from '../../adapters/TextFieldAdapter'
import styled from "styled-components";
import {Link} from "react-router-dom";


export default ({}) => {
    const [accountCreated, setAccountCreated] = useState(false);

const createUser = ({email,name,password,type})=>{
    axios.post('http://127.0.0.1:8103/api/db_create_user', {user_type: type, email, username:name, password})
        .then(response => {
            console.log(response.data);
            setAccountCreated(true)
        })
        .catch((error) => {
            console.log(error)
        });
}
    const submit = async values => {
      await createUser(values)
    };


    // if(this.state.accountCreated){
    // 	return <Redirect to='/login' />
    //   }
    return (
        <PaperWrapper elevation={3}>
            <Form onSubmit={submit}>
                {({handleSubmit}) => (
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography align='center' variant='h3'>Создание аккаунта</Typography>
                        </Grid>
                        <Grid item xs={12}> <Typography variant='h5'>Электронная почта</Typography>
                            <Field label="E-mail" component={TextFieldAdapter} name="email"/></Grid>
                        <Grid item xs={12}>
                            <Typography variant='h5'>Имя пользователя</Typography>
                            <Field label="Имя" component={TextFieldAdapter} name="name"/>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='h5'>Пароль</Typography>
                            <Field label="Пароль" component={TextFieldAdapter} name="password"/>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='h5'>Выберите тип учетной записи</Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <div><Field
                                name="type"
                                component="input"
                                type="radio"
                                value="student"/> Студент
                            </div>
                        </Grid>
                        <Grid item xs={1}>
                            <div><Field
                                name="type"
                                component="input"
                                type="radio"
                                value="teacher"/> Преподователь
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography align='center' variant='h6'>У вас уже есть аккуанут? <Link
                                to={'/login'}>Войти</Link></Typography>
                        </Grid>
                        <Grid container direction="row" justify="center">

                            <Button variant="contained" color="primary" onClick={handleSubmit}>
                                Создать
                            </Button>

                        </Grid>
                    </Grid>
                        )}
            </Form>
        </PaperWrapper>
    );

}
const PaperWrapper = styled(Paper)`
padding: 2rem;
`;

// <Body>
//     <Card className="cardTitleStyle">Создание аккаунта</Card>
//     <form class="flex-column" onSubmit={submit}>
//         <div class="form-group pt-0 pl-2 pr-2">
//             <label for="inputEmail" class="text-dark font-weight-bold">Электронная почта</label>
//             <input type="text" class="form-control" name='email' value={email} placeholder="email"
//                    onChange={() => setEmail(e.target.value)} aria-describedby="emailHelp"/>
//         </div>
//         <div class="form-group pt-0 pl-2 pr-2">
//             <label for="inputUsername" class="text-dark font-weight-bold">Имя пользователя</label>
//             <input type="text" class="form-control" name='username' value={username} placeholder="username"
//                    onChange={() => setUsername(e.target.value)} aria-describedby="usernameHelp"/>
//         </div>
//         <div class="form-group pt-0 pl-2 pr-2">
//             <label for="inputPassword" class="text-dark font-weight-bold">Пароль</label>
//             <input type="password" class="form-control" name='password' value={password}
//                    onChange={() => setPassword(e.target.value)} placeholder="password"
//                    aria-describedby="passwordHelp"/>
//         </div>
//         <form class="flex-row" onSubmit={submit}>
//             <div class="form-group pt-0 pl-2 pr-2">
//                 <label class="text-dark font-weight-bold">Вы присоединяетесь в качестве студента или
//                     преподователя?</label>
//                 <small class="form-text text-muted">Пожалуйста, выберите свой ответ ниже.</small>
//             </div>
//             <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
//                 <div class="btn-group mr-2 pt-0 pl-2 pr-2" id="userStudent">
//                     <button type="button" class="btn btn-outline-secondary" name='user_type'
//                             value={'student'} onClick={() => setUserType(e.target.value)}>Студент
//                     </button>
//                 </div>
//                 <div class="btn-group mr-2 pt-0 pl-2 pr-2" id="userInstructor">
//                     <button type="button" class="btn btn-outline-secondary" name='user_type'
//                             value={'instructor'} onClick={() => setUserType(e.target.value)}>Преподователь
//                     </button>
//                 </div>
//             </div>
//         </form>
//         <div class="mx-auto text-center p-0 col-md-12 mb-4 text-sm">
//             У вас уже есть аккаунт?
//             <a href="/login" class="ml-1 text-dark font-weight-bold"><u>Войти</u></a>
//         </div>
//         <div class="mx-auto text-center p-0 col-md-12 mb-4 text-sm">
//             <button className="btnSignUp">Создать</button>
//         </div>
//
//     </form>
// </Body>

