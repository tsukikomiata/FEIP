import styles from "./CurrentOrdersCard.module.css"
import OrderCardItem from "./CurrentOrdersCardItem.js";
import deleteRequest from "../../api/DeleteRequest";
import postRequest from "../../api/PostRequest";


function CurrentOrdersCard({order}) {
    const products = order.products

    let buttonText = ""
    if (order.status === "wait confirm") {
        buttonText = "Принять"
    } else if (order.status === "accepted") {
        buttonText = "Готов"
    } else if (order.status === "finished") {
        buttonText = "Получен"
    }

    async function reject() {
        await deleteRequest(order, "http://localhost:8000/api/order")
        order.status = "rejected"
        await postRequest(order, "http://localhost:8000/api/order")
    }

    async function next() {
        await deleteRequest(order, "http://localhost:8000/api/order")
        if (order.status === "wait confirm") {
            order.status  = "accepted"
        } else if (order.status === "accepted") {
            order.status = "finished"
        } else if (order.status === "finished") {
            order.status  = "received"
        }
        await postRequest(order, "http://localhost:8000/api/order")
    }

    return (
        <div className={styles.currentOrderCard}>
            <div className={styles.orderCard}>
                <p className={styles.orderCard__user}>Пользователь: {order.user}</p>
                <div className={styles.orderCard__content}>
                    {products.map((option)=> <OrderCardItem name={option}/>)}
                </div>
                <p className={styles.orderCard__note}>Уточнение: {order.note}</p>
                <p className={styles.orderCard__total}>Сумма заказа: {order.price}</p>
            </div>
            <div className={styles.currentOrderCard__buttons}>
                <button className={styles.currentOrderCard__buttons_reject} onClick={reject}>
                    Отклонить
                </button>
                <button className={styles.currentOrderCard__buttons_accept} onClick={next}>
                    {buttonText}
                </button>
            </div>
        </div>
    )
}

export default CurrentOrdersCard