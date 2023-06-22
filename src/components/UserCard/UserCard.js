import styles from "./UserCard.module.css"
import star from "../../images/star.svg"

function UserCard({user}) {
    let title = "Карточка пользователя"
    if (user.type === "employee") {
        title = "Карточка работника"
    } else if (user.type === "manager") {
        title = "Карточка менеджера"
    }

    let achievement = "Пусто :("
    if (user.achievements.length !== 0) {
        achievement = user.achievements[user.achievements.length - 1]
    }

    let workPlace = []
    if (user.type === "employee") {
        workPlace = [true]
    }

    let karma = user.karma
    let karmaArray = []

    while (karma) {
        karmaArray.push(true)
        karma--
    }

    return (
        <div className={styles.userCard}>
            <p className={styles.userCard__title}>{title}</p>
            <div className={styles.userCard__content}>
                <img src={user.avatar} className={styles.userCard__content_avatar} alt="avatar"/>
                <div className={styles.userCard__info}>
                    <div className={styles.userCard__content_mainInfo}>
                        <p>Логин: {user.username}</p>
                        <p>Имя: {user.name}</p>
                    </div>
                    <div className={styles.userCard__content_addInfo}>
                        <p>Достижение: {achievement}</p>
                        <div className={styles.userCard__content_addInfo_karma}>
                            <p>Карма:</p>
                            {karmaArray.map(()=> <img src={star} alt="avatar"
                                                            className={styles.userCard__content_karmaStar}/>)}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard