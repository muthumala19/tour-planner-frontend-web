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

export default function SignUp() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
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
                        autoFocus
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
                    /><TextField
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
                    /><TextField
                    margin="normal"
                    required
                    fullWidth
                    name="confirm_password"
                    label="Confirm Password"
                    type="confirm_password"
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
                        Sign Up
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link href="src/components/signin_component#" variant="body2" style={{color: '#0C356A'}}>
                                {"Already have an account? Sign In"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
                <div className={'sign_in_options'}>
                    <div><h6>Sign Un With :</h6></div>
                    <div><GoogleIcon className={'sign_in_option'} sx={{color: "#0C356A", ml: 1, mr: 1}}/></div>
                    <div><FacebookIcon className={'sign_in_option'} sx={{color: "#0C356A", ml: 1, mr: 1}}/></div>
                    <div></div>
                </div>
            </Box>
        </Container>
    );
}