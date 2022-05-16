import axios from 'axios';
import { Typography, Paper, Grid, Button } from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import TextFieldAdapter from '../../adapters/TextFieldAdapter';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN_URL } from '../../../constants/url';

const CreateAccountForm = () => {
  const navigate = useNavigate();

  const createUser = ({ email, name, password, type }) => {
    axios
      .post('http://127.0.0.1:8103/api/db_create_user', {
        user_type: type,
        email,
        username: name,
        password,
      })
      .then((response) => {
        console.log(response.data);
        navigate(LOGIN_URL);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const submit = async (values) => {
    await createUser(values);
  };

  return (
    <PaperWrapper elevation={3}>
      <Form onSubmit={submit}>
        {({ handleSubmit }) => (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography align="center" variant="h3">
                Создание аккаунта
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {' '}
              <Typography variant="h5">Электронная почта</Typography>
              <Field label="E-mail" component={TextFieldAdapter} name="email" />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">Имя пользователя</Typography>
              <Field label="Имя" component={TextFieldAdapter} name="name" />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">Пароль</Typography>
              <Field
                label="Пароль"
                component={TextFieldAdapter}
                name="password"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">Выберите тип учетной записи</Typography>
            </Grid>
            <Grid item xs={2}>
              <RadioButtonContainer>
                <Field
                  name="type"
                  component="input"
                  type="radio"
                  value="student"
                />{' '}
                <span>Студент</span>
              </RadioButtonContainer>
            </Grid>
            <Grid item xs={2}>
              <RadioButtonContainer>
                <Field
                  name="type"
                  component="input"
                  type="radio"
                  value="teacher"
                />{' '}
                <span>Преподователь</span>
              </RadioButtonContainer>
            </Grid>
            <Grid item xs={12}>
              <Typography align="center" variant="h6">
                У вас уже есть аккуанут? <Link to={'/login'}>Войти</Link>
              </Typography>
            </Grid>
            <Grid container direction="row" justify="center">
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Создать
              </Button>
            </Grid>
          </Grid>
        )}
      </Form>
    </PaperWrapper>
  );
};
const PaperWrapper = styled(Paper)`
  padding: 2rem;
`;

const RadioButtonContainer = styled.div`
  display: flex;
  width: 100%;
  span {
    margin-left: 1rem;
  }
`;

export default CreateAccountForm;
