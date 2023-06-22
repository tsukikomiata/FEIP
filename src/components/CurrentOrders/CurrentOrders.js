import styles from "./CurrentOrders.module.css"
import CurrentOrdersCard from "../CurrentOrdersCard/CurrentOrdersCard";
import catLogo from "../../images/cat.svg";


function CurrentOrders({orders}) {
    let wait = [], accepted = [], finished = []
    orders.map((order) => {
        if (order.status === "wait confirm") {
            wait.push(order)
        } else if (order.status === "accepted") {
            accepted.push(order)
        } else if (order.status === "finished") {
            finished.push(order)
        }
    })

    if (wait.length) wait.reverse()
    if (accepted.length) accepted.reverse()
    if (finished.length) finished.reverse()

    return (
        <div className={styles.currentOrders}>
            <p>Ждут подтверждения</p>
            <div className={styles.currentOrders__items}>
                {wait.map((order) => <CurrentOrdersCard order={order}/>)}
            </div>
            <p>В работе</p>
            <div className={styles.currentOrders__items}>
                {accepted.map((order) => <CurrentOrdersCard order={order} status={"accepted"}/>)}
            </div>
            <p>Готовы</p>
            <div className={styles.currentOrders__items}>
                {finished.map((order) => <CurrentOrdersCard order={order} status={"finished"}/>)}
            </div>
            <img src={catLogo} className={styles.currentOrders__catLogo} alt="cat"/>
        </div>
    )
}

export default CurrentOrders
