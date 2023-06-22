import {Navigate} from "react-router";


function Logout({setAuthorised, path}) {
    setAuthorised(false);
    localStorage.removeItem('token');
    return <Navigate to={path}/>
}

export default Logout