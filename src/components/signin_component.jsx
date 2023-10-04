import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../screens/auth_screen.css'

export default function SignIn() {
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
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: '#D9D9D9',
                    opacity: '0.85'

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
                        autoComplete="current-password"
                        InputProps={{
                            style: {
                                borderRadius: 20,
                            }
                        }}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary"/>}
                        label="Remember me"
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
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="" variant="body2" style={{color: '#0C356A'}}>
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/register" variant="body2" style={{color: '#0C356A'}}>
                                {"Don't have an account? Register"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
                <div className={'sign_in_options'}>
                    <div><h6>Sign In With :</h6></div>
                    <div><GoogleIcon className={'sign_in_option'} sx={{color: "#0C356A", ml: 1, mr: 1}}/></div>
                    <div><FacebookIcon className={'sign_in_option'} sx={{color: "#0C356A", ml: 1, mr: 1}}/></div>
                    <div></div>
                </div>
            </Box>
        </Container>
    );
}