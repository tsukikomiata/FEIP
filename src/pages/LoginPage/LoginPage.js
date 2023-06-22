import styles from "./LoginPage.module.css"
import UniversalContent from "../../components/UniversalContent/UniversalContent";
import {NavLink} from "react-router-dom";
import logo from "../../images/logo.jpg";
import postRequest from "../../api/PostRequest";


function LoginPage({auth, setAuthorised, setUser, sendNotification}) {
    const handleSubmit = async event => {
        event.preventDefault();
        const data = {
            username: event.target.elements.name.value,
            password: event.target.elements.password.value
        }
        let userData;
        userData = await postRequest(data, 'http://localhost:8000/api/login')
            .catch(err => userData = {token: 'error'});
        if (userData.token !== 'error') {
            auth = true;
            setAuthorised(auth);
            setUser(userData.user);
            sendNotification(`Welcome, ${userData.user.username}!`, 'Nice to see you!', 'success');
            localStorage.setItem('token', userData.token);
        } else sendNotification('Oops!', 'Check if login and password are correct', 'danger');

    }
    return (
        <div className={styles.loginPage}>
            <div className={styles.login}>
                <NavLink to="/home" className={styles.login__logo}>
                    <img src={logo} className={styles.login__logo} alt="logo"/>
                </NavLink>
                <form className={styles.login__form} onSubmit={handleSubmit}>
                    <input
                        placeholder="Введите логин"
                        type="text"
                        id="name"
                    />
                    <input
                        placeholder="Введите пароль"
                        type="password"
                        id="password"
                    />
                    <button type="submit" className={styles.login__form_button}>
                        Войти
                    </button>
                </form>
                <NavLink to="/" className={styles.login__link}>Ещё нет аккаунта? Зарегестрироваться!</NavLink>
            </div>
            <UniversalContent className={styles.loginPage__content}/>
        </div>
    )
}

export default LoginPage