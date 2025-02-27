import { useEffect } from "react";


const Login = () => {
    useEffect(() => {
        window.location.href = "https://dashboard.freebyz.com/login";
    }, []);

    return null;
};

export default Login;
