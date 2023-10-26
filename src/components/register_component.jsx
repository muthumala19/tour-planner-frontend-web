import React, {useRef} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import '../screens/auth_screen.css'
import {useNavigate} from "react-router-dom";
import {validateUserData} from "../validators/form_validators";

export default function Register() {
    const formRef = useRef(null);
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(formRef.current);
        const userDataValidationResults = validateUserData({
            first_name: data.get('first_name'),
            last_name: data.get('last_name'),
            age: data.get('age'),
            username: data.get('username'),
        })
        if (userDataValidationResults.error) {
            const errorDetails = userDataValidationResults.error.details.map((error) => error.message).join(', ');
            alert(errorDetails);
            resetForm();
            return;
        }
        navigate(`/register/sign_up?fullname=${data.get('first_name') + ' ' + data.get('last_name')}&age=${data.get('age')}&username=${data.get('username')} }`);
        resetForm(); // Reset the form after submission
    };

    const resetForm = () => {
        formRef.current.reset();
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
                    Register
                </Typography>
                <form ref={formRef} onSubmit={handleSubmit} noValidate>
                    <TextField
                        margin="normal"
                        sx={{mr: 2}}
                        required
                        InputProps={{
                            style: {
                                borderRadius: 20,
                            }
                        }}
                        id="first_name"
                        label="First Name"
                        name="first_name"
                        autoComplete="first_name"
                        autoFocus
                        fullWidth={true}
                    />
                    <TextField
                        margin="normal"
                        sx={{mr: 2}}
                        required
                        InputProps={{
                            style: {
                                borderRadius: 20,
                            }
                        }}
                        id="last_name"
                        label="Last Name"
                        name="last_name"
                        autoComplete="last_name"
                        autoFocus fullWidth={true}
                    />
                    <TextField
                        margin="normal"
                        required
                        InputProps={{
                            style: {
                                borderRadius: 20,
                            }
                        }}
                        id="age"
                        sx={{mr: 2}}
                        label="Age"
                        name="age"
                        autoComplete="age"
                        autoFocus
                        fullWidth={true}
                    />
                    <TextField
                        margin="normal"
                        required
                        InputProps={{
                            style: {
                                borderRadius: 20,
                            }
                        }}
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                    />
                    <Grid container>
                        <Grid item>
                            <Link href="/sign_in" variant="body2" style={{color: '#0C356A'}}>
                                {"Already have an account? Sign In"}
                            </Link>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        sx={{mt: 3, mb: 2}}
                        style={{
                            borderRadius: '2vh',
                            backgroundColor: '#0C356A',
                            color: '#D9D9D9',
                            fontWeight: 'bold',
                            fontStyle: 'italic',
                        }}
                    >
                        Next
                    </Button>
                </form>
            </Box>
        </Container>
    );
}
