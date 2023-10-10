import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../screens/auth_screen.css'
import GoogleAuthStrategy from "../services/authentication_services/goodle_auth_stratergy";
import AuthContext from "../services/authentication_services/auth_context";
import EmailAuthStrategy from "../services/authentication_services/email_auth_stratergy";
import {CircularProgress} from "@mui/joy";
import {useContext} from "react";
import {Auth} from "../contexts/auth_context";


export default function SignUp() {
    const [user, setUser, authenticating, setAuthenticating] = useContext(Auth);

    async function signUpWithGoogle() {
        try {
            setAuthenticating(true);
            const context = new AuthContext(new GoogleAuthStrategy());
            await context.signUp();
            // window.location.href = '/';
        } catch (e) {
            console.log(e);
        } finally {
            setAuthenticating(false);
        }
    }

    async function signUpWithEmailPassword(email, password) {
        try {
            setAuthenticating(true);
            const context = new AuthContext(new EmailAuthStrategy(email, password));
            await context.signUp();
            window.location.href = '/';
        } catch (e) {
            console.log(e);
        } finally {
            setAuthenticating(false);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        await signUpWithEmailPassword(data.get('email'), data.get('password'));
    };

    return (

        <Container component="main" maxWidth="sm">
            <Box
                sx={{
                    boxShadow: 3,
                    borderRadius: 10,
                    px: 4,
                    pt: 6,
                    pb: 2,
                    marginTop: 15,
                    marginBottom: 5,
                    scrollBehavior: 'sm',
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: '#D9D9D9',
                    opacity: '0.85'

                }}
            >
                <Typography component="h1" variant="h4" style={{color: '#0C356A', fontWeight: 'bold'}}>
                    Sign Up
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                    <TextField
                        margin="normal"
                        required
                        InputProps={{
                            style: {
                                borderRadius: 20,
                            }
                        }}
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        // autoComplete="current-password"
                        InputProps={{
                            style: {
                                borderRadius: 20,
                            }
                        }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="confirm_password"
                        label="Confirm Password"
                        type="password"
                        id="confirm_password"
                        // autoComplete="current-password"
                        InputProps={{
                            style: {
                                borderRadius: 20,
                            }
                        }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        // variant="contained"
                        sx={{mt: 3, mb: 2}}
                        style={{
                            borderRadius: '2vh',
                            backgroundColor: '#0C356A',
                            color: '#D9D9D9',
                            fontWeight: 'bold'
                        }}

                    >
                        {authenticating ? <CircularProgress/> : "Sign Up"}
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link href="/sign_in" variant="body2" style={{color: '#0C356A'}}>
                                {"Already have an account? Sign In"}
                            </Link>
                        </Grid>
                    </Grid>
                    <Button
                        // variant="contained"
                        sx={{mt: 3, mb: 2,}}
                        style={{
                            borderRadius: '2vh',
                            backgroundColor: '#0C356A',
                            color: '#D9D9D9',
                            fontWeight: 'bold',
                            fontStyle: 'italic',
                        }}
                        onClick={
                            () => {
                                window.history.back()
                            }
                        }

                    >
                        Back
                    </Button>
                </Box>
                <div className={'sign_in_options'}>
                    <div><h6>Sign Up With :</h6></div>
                    <div><GoogleIcon className={'sign_in_option'} sx={{color: "#0C356A", ml: 1, mr: 1}}
                                     onClick={signUpWithGoogle}/></div>
                    <div><FacebookIcon className={'sign_in_option'} sx={{color: "#0C356A", ml: 1, mr: 1}}/></div>
                    <div></div>
                </div>
            </Box>
        </Container>
    );
}