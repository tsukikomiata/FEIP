import styles from "./Profile.module.css"
import UserCard from "../UserCard/UserCard";
import Achievements from "../Achievements/Achievements";
import catLogo from "../../images/cat.svg"


function Profile({user}) {
    return (
        <div className={styles.profile}>
            <UserCard user={user}/>
            <Achievements user={user}/>
            <img src={catLogo} className={styles.profile__catLogo} alt="cat"/>
        </div>
    )
}

export default Profile