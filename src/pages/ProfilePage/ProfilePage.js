import styles from "./ProfilePage.module.css"
import Sidebar from "../../components/Sidebar/Sidebar";
import Profile from "../../components/Profile/Profile";
import {Navigate} from "react-router";


function ProfilePage({user, setAuth}) {
    function Logout() {
        setAuth(false);
        localStorage.removeItem('token');
        sessionStorage.clear()
        return <Navigate to={"/home"}/>
    }

    return (
        <div className={styles.profilePage}>
            <Sidebar item="profile" user={user}/>
            <Profile user={user}/>
            <p onClick={Logout}>Log Out</p>
        </div>
    )
}

export default ProfilePage