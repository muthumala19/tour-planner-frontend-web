import './App.css';
import '../src/screens/auth_screen'
import AuthScreen from "./screens/auth_screen";


function App() {
    return (
        <div className="App">
            <AuthScreen isSignIn={false}/>
        </div>
    );
}

export default App;
