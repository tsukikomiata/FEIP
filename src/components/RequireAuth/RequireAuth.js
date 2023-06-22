import {Navigate} from "react-router";
import React from "react";
import {useLocation} from "react-router-dom";

function RequireAuth({ auth, setAuthorised, path, setPath, user, children }) {
    const location = useLocation();
    path = location.pathname;
    setPath(path);
    if (!auth) {
        return <Navigate to="/login"/>;
    }

    return React.cloneElement(children, {...children.props, auth: auth, setAuthorised: setAuthorised, user: user});
}

export default RequireAuth