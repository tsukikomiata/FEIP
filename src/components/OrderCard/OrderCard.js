import styles from "./OrderCard.module.css"
import OrderCardItem from "./OrderCardItem";
import postRequest from "../../api/PostRequest";
import deleteRequest from "../../api/DeleteRequest";


function OrderCard({order}) {
    const products = order.products

    let status = "Ждёт подтверждения"
    if (order.status === "accepted") {
        status = "Принят в работу"
    } else if (order.status === "finished") {
        status = "Готов"
    } else if (order.status === "received") {
        status = "Получен"
    } else if (order.status === "rejected") {
        status = "Отклонён"
    } else if (order.status === "rejected by user") {
        status = "Отменён Вами"
    }

    async function reject() {
        await deleteRequest(order, "http://localhost:8000/api/order")
        order.status = "rejected by user"
        await postRequest(order, "http://localhost:8000/api/order")
    }

    return (
        <div className={styles.orderCard}>
            <p className={styles.orderCard__status}>Статус: {status}</p>
            <div className={styles.orderCard__content}>
                {products.map((option)=> <OrderCardItem name={option}/>)}
            </div>
            <div className={styles.orderCard__footer}>
            <p className={styles.orderCard__total}>Сумма заказа: {order.price}</p>
            {order.status === "wait confirm" ? <button onClick={reject}>Отменить заказ</button> : null}
            </div>
        </div>
    )
}

export default OrderCard