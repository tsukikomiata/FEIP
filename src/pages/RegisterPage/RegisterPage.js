import styles from "./RegisterPage.module.css"
import UniversalContent from "../../components/UniversalContent/UniversalContent";
import {NavLink} from "react-router-dom";
import logo from "../../images/logo.jpg";
import postRequest from "../../api/PostRequest";

async function saveUser(data) {
    return postRequest(data, 'http://localhost:8000/api/register')
}

function RegisterPage({auth, setAuthorised, setUser, sendNotification}) {

    const onSubmit = async event => {
        event.preventDefault();
        const data = {
            username: event.target.elements.username.value,
            name: event.target.elements.name.value,
            password: event.target.elements.password.value,
            passwordAgain: event.target.elements.duplicatePassword.value
        }
        let userData;
        userData = await saveUser(data);
        if (userData.token !== 'error') {
            auth = true;
            setAuthorised(auth);
            setUser(userData.user);
            sendNotification('Account created successfully!', `Welcome, ${userData.user.username}!`, 'success')
            localStorage.setItem('token', userData.token);
        } else sendNotification('Oops!', userData.error, 'danger')
    }

    return (
        <div className={styles.registerPage}>
            <div className={styles.register}>
                <NavLink to="/home" className={styles.register__logo}>
                    <img src={logo} className={styles.register__logo} alt="logo"/>
                </NavLink>
                <form className={styles.register__form} onSubmit={onSubmit}>
                    <input
                        placeholder="Введите имя"
                        type="text"
                        id="name"
                    />
                    <input
                        placeholder="Введите логин"
                        type="text"
                        id="username"
                    />
                    <input
                        placeholder="Введите пароль"
                        type="password"
                        id="password"
                    />
                    <input
                        placeholder="Повторите пароль"
                        type="password"
                        id="duplicatePassword"
                    />
                    <button type="submit" className={styles.register__form_button}>
                        Зарегестрироваться
                    </button>
                </form>
                <NavLink to="/login" className={styles.register__link}>Уже есть аккаунт? Войти!</NavLink>
            </div>
            <UniversalContent className={styles.registerPage__content}/>
        </div>
    )
}

export default RegisterPage