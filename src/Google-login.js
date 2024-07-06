import { useState } from "react";
import { GoogleLogin } from "react-google-login";

const clientId = "345742081859-dug9k6blg3sevjaushbbos2q7atmgl7c.apps.googleusercontent.com"

const AuthGoogleLogin = () => {

    const [flag, setFlag] = useState(false);
    const [name, setName] = useState();

    const onSuccess = (res) => {
        setName(res.profileObj["name"])
        console.log("success", res.profileObj);
        setFlag(true);
    }

    const onFailure = (res) => {
        console.log("failure", res)
    }

    return (
        <>
            {flag ? (<h1>hello {name}</h1>) :
                (<GoogleLogin
                    clientId={clientId}
                    buttonText="Signin with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={false}
                />)
            }
        </>
    )
}

export default AuthGoogleLogin