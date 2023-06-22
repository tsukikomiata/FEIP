import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ReactNotification, {store} from "react-notifications-component";
import 'react-notifications-component/dist/theme.css'
import './App.css';
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import MenuPage from "./pages/MenuPage/MenuPage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import UserOrdersPage from "./pages/UserOrdersPage/UserOrdersPage";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import RequireUnauth from "./components/RequireAuth/RequireUnauth";
import Logout from "./components/Logout/Logout";
import BasketPage from "./pages/BasketPage/BasketPage";
import verifyUser from "./verifyUser";
import ProductAddPage from "./pages/ProductAddPage/ProductAddPage.js";

import CurrentOrdersPage from "./pages/CurrentOrdersPage/CurrentOrdersPage";


const defaultUser = {
    username: "user",
    name: "name",
    type: "user",
    place: "D1",
    achievements: [],
    karma: -1,
}

function App() {
    let [auth, setAuth] = useState(false);
    let [path, setPath] = useState('/home');
    let [user, setUser] = useState(defaultUser);
    let [title, setTitle] = useState('Ajax');
    let [error, setError] = useState('');


    useEffect(() => {
        let cleanupFunc = false;
        document.title = title;

        const getAuth = async () => {
            try {
                const res = await verifyUser(localStorage.getItem('token'));
                if (!cleanupFunc) {
                    auth = (res !== null && res !== undefined && res);
                    setAuth(res !== null && res !== undefined && res);
                }
                if (auth) {
                    user = res?.user;
                    setUser(user);
                }
            } catch (e) {
                setError(e);
            }
        }

        getAuth();
        return () => cleanupFunc = true;
    }, [])

    function changeTitle(title) {
        setTitle(title);
    }

    function createNotification(title, text, type) {
        store.addNotification({
            title: title,
            message: text,
            type: type,
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 5000,
                onScreen: true,
                pauseOnHover: true
            }
        })
    }

    return (
        <Router>
            <ReactNotification/>
            <div className="app">
                <Routes>
                    <Route path="/home" element={<HomePage user={user}/>}/>
                    <Route path="/profile" element={<RequireAuth auth={auth} setAuthorised={setAuth} path={path} setPath={setPath} user={user}>
                        <ProfilePage setAuth={setAuth} user={user}/>
                    </RequireAuth>}/>
                    <Route path="/login" element={<RequireUnauth auth={auth} setAuthorised={setAuth} path={path} setUser={setUser}>
                        <LoginPage sendNotification={createNotification}/>
                    </RequireUnauth>}/>
                    <Route path="/register" element={<RegisterPage sendNotification={createNotification}/>}/>
                    <Route path="/menu" element={<MenuPage user={user}/>}/>
                    <Route path="/product" element={<ProductDetailsPage user={user}/>}/>
                    <Route path="/product/:id" element={<ProductDetailsPage user={user}/>}/>
                    <Route path="/orders" element={<RequireAuth auth={auth} setAuthorised={setAuth} path={path} setPath={setPath} user={user}>
                        <UserOrdersPage user={user}/>
                    </RequireAuth>}/>
                    <Route path="/" element={<RequireUnauth auth={auth} setAuthorised={setAuth} path={path} setUser={setUser}>
                        <RegisterPage sendNotification={createNotification}/>
                    </RequireUnauth>}/>
                    <Route path="/basket" element={<BasketPage user={user} changeTitle={changeTitle}/>}/>
                    <Route path="/logout" element={<RequireAuth auth={auth} setAuthorised={setAuth} path={path}>
                        <Logout sendNotification={createNotification}/>
                    </RequireAuth>}/>
                    <Route path="/add" element={<ProductAddPage user={user}/>}/>
                    <Route path="/current" element={<CurrentOrdersPage user={user}/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
