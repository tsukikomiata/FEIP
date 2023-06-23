import styles from "./UserOrders.module.css"
import OrderCard from "../OrderCard/OrderCard";
import catLogo from "../../images/cat.svg";


function UserOrders({orders}) {
    let userOrders = []
    orders.map((order) => userOrders.push(order))
    userOrders.reverse()
    let empty = ""
    if (!userOrders.length) {
        empty = "Пусто :("
    }
    console.log(userOrders)
    return (
        <div className={styles.userOrders}>
            <p className={styles.userOrdersTitle}>Заказы: </p>
            {userOrders.map((option) => <OrderCard order={option}/>)}
            <p>{empty}</p>
            <img src={catLogo} alt="cat" className={styles.userOrders__catLogo}/>
        </div>
    )
}

export default UserOrders
