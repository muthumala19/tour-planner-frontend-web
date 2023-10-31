import React, {useState} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AuthContext from "../services/authentication_services/auth_context";
import GoogleAuthStrategy from "../services/authentication_services/goodle_auth_stratergy";
import {validateEmail, validatePassword} from "../validators/form_validators";
import EmailAuthStrategy from "../services/authentication_services/email_auth_stratergy";
import {Link} from "react-router-dom";


export default function SignIn() {
    const [authenticating, setAuthenticating] = useState(false);

    const initialFormState = {
        email: "",
        password: "",
        rememberMe: false,
    };

    const [formData, setFormData] = useState(initialFormState);

    const resetForm = () => {
        setFormData(initialFormState);
    };

    async function signInWithGoogle() {
        try {
            setAuthenticating(true);
            const context = new AuthContext(new GoogleAuthStrategy());
            await context.signIn();
            window.location.href = '/';
        } catch (e) {
            console.log(e);
        } finally {
            setAuthenticating(false);
        }
    }

    async function signInWithEmailPassword(email, password) {
        try {
            setAuthenticating(true);
            const context = new AuthContext(new EmailAuthStrategy(email, password));
            await context.signIn();
            resetForm(); // Reset the form after successful sign-in
            window.location.href = '/';
        } catch (e) {
            console.log(e);
            alert(e)
        } finally {
            setAuthenticating(false);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const emailValidationResults = validateEmail(formData.email);
        const passwordValidationResults = validatePassword(formData.password);
        if (emailValidationResults.error || passwordValidationResults.error) {
            alert(`${emailValidationResults.error ? emailValidationResults.error.details[0].message : ''} ${passwordValidationResults.error ? passwordValidationResults.error.details[0].message : ''}`)
            resetForm();
            return;
        }
        await signInWithEmailPassword(formData.email, formData.password);
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
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: '#D9D9D9',
                    opacity: '0.85',
                }}
            >
                <Typography component="h1" variant="h4" style={{color: '#0C356A', fontWeight: 'bold'}}>
                    Sign In
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                    <TextField
                        margin="normal"
                        required
                        InputProps={{
                            style: {
                                borderRadius: 20,
                            },
                        }}
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
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
                        InputProps={{
                            style: {
                                borderRadius: 20,
                            },
                        }}
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary"/>}
                        label="Remember me"
                        checked={formData.rememberMe}
                        onChange={(e) => setFormData({...formData, rememberMe: e.target.checked})}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        sx={{mt: 3, mb: 2}}
                        style={{
                            borderRadius: '2vh',
                            backgroundColor: '#0C356A',
                            color: '#D9D9D9',
                            fontWeight: 'bold',
                        }}
                    >
                        {authenticating ? <CircularProgress/> : "Sign In"}
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="" variant="body2" style={{color: '#0C356A'}}>
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/register" variant="body2" style={{color: '#0C356A'}}>
                                {"Don't have an account? Register"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
                <div className={'sign_in_options'}>
                    <div><h6>Sign In With :</h6></div>
                    <div><GoogleIcon className={'sign_in_option'} sx={{color: "#0C356A", ml: 1, mr: 1}}
                                     onClick={signInWithGoogle}/></div>
                    <div><FacebookIcon className={'sign_in_option'} sx={{color: "#0C356A", ml: 1, mr: 1}}/></div>
                    <div></div>
                </div>
            </Box>
        </Container>
    );
}
