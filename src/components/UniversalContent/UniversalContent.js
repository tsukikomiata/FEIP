import homeBackground from "../../images/homeBackground.jpg";
import styles from "./UniversalContent.module.css"

function UniversalContent() {
    return (
        <img src={homeBackground} className={styles.universalContent}/>
    )
}

export default UniversalContent