import styles from "./AchievementsItem.module.css"
import {useState} from "react";
import {GetRequest} from "../../api/GetRequest";

const defaultAchievement = {}

function AchievementsItem({name}) {
    const [achievement, setAchievement] = useState(defaultAchievement)
    const API_URL = `http://localhost:8000/api/achievement/${name}`

    useState(async () => {
        if (name) await GetRequest(defaultAchievement, setAchievement, API_URL);
    })

    return (
        <div className={styles.achievementsItem}>
            <p className={styles.achievementsItem__name}>{achievement.name}</p>
            <p className={styles.achievementsItem__description}>{achievement.description}</p>
        </div>
    )
}

export default AchievementsItem