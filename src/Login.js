import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
// import { Browser } from '@capacitor/browser';

// const LoginButton = () => {
//     const { loginWithRedirect } = useAuth0();

//     const login = async () => {
//         await loginWithRedirect({
//             async openUrl(url) {
//                 // Redirect using Capacitor's Browser plugin
//                 await Browser.open({
//                     url,
//                     windowName: "_self"
//                 });
//             }
//         });
//     };

//     return <button onClick={login}>Log in</button>;
// };
// ==========================================================================================

const LoginButton = () => {

    const { loginWithRedirect } = useAuth0();

    return <button onClick={loginWithRedirect}>Log in</button>;

}
export default LoginButton;