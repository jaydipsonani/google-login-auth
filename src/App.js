import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import AuthGoogleLogin from './Google-login';

function App() {

  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0()

  console.log("current user", user)

  return (
    <div className="App">
      {isAuthenticated && <h1>Hello {user.name}</h1>}
      {isAuthenticated ?
        (<button onClick={() => logout({ returnTo: window.location.origin })} >Logout</button>)
        : (<button onClick={() => loginWithRedirect()} style={{ padding: '10px' }}>Sign in with Google</button>)}
      {/* <AuthGoogleLogin /> */}

    </div>
  );
}

export default App;
