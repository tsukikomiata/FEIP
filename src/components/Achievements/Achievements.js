import styles from "./Achievements.module.css"
import AchievementsItem from "./AchievementsItem.js"

function Achievements({user}) {
    return (
        <div className={styles.achievements}>
            <p className={styles.achievements__title}>Полученные достижения:</p>
            <div className={styles.achievements__items}>
                {user.achievements.map((option)=> <AchievementsItem name={option}/>)}
            </div>
        </div>
    )
}

export default Achievements