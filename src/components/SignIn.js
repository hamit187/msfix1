import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useDispatch } from 'react-redux';
import { authActions } from '../store/slices/authSlice';
import { useState } from 'react';
import { loginUser } from '../store/thunks/auth-thunks';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        MsFix
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme({
    status: {
        danger: '#e53e3e',
      },
      palette: {
        primary: {
          main: '#5e5b78',
          darker: '#292b46',
        },
        neutral: {
          main: '#fba450',
          contrastText: '#fff',
        }
    }
});

// let userInfo = { email: 'test@msfix.com', password: '123456'};

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const loginHandler = (e) => {
        dispatch(loginUser({ email, password }));
    };

    const changeFormHandler = () => {
        dispatch(authActions.switchFrom());
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#292b46' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              onChange={(e) => {setEmail(e.target.value)}}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => {setPassword(e.target.value)}}
            />
            <Button
              type="submit"
              fullWidth
              color='neutral'
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={loginHandler}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" color='#5e5b78' variant="body2" onClick={changeFormHandler}>
                  Create an account
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
export default SignIn;