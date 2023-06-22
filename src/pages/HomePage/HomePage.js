import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./HomePage.module.css"
import UniversalContent from "../../components/UniversalContent/UniversalContent";

function HomePage({user}) {
    return (
        <div className={styles.homePage}>
            <Sidebar item="home" user={user}/>
            <UniversalContent className={styles.homePage__content}/>
        </div>
    )
}

export default HomePage