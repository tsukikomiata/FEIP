import styles from "./Basket.module.css"
import BasketItem from "./BasketItem.js";
import catLogo from "../../images/cat.svg"
import {NavLink} from "react-router-dom";


function Basket({createOrder}) {
    const sum = sessionStorage.getItem("sum")
    const basket = sessionStorage.getItem("basket")
    let empty = ""
    let order = []
    if (!basket) {
        empty = "Пусто :("
    } else {
        order = basket.split("_")
    }

    return (
        <div className={styles.basket}>
            <div className={styles.basket__content}>
                <p className={styles.basket__title}>Выбранные товары:</p>
                {order.map((option) => <BasketItem name={option}/>)}
                <p>{empty}</p>
            </div>
            <form className={styles.basket__footer}>
                <p>Сумма заказа: {sum}</p>
                <NavLink to={"/menu"}>
                    <button type="submit" className={styles.basket__footer_button} onClick={createOrder}>
                        Сделать заказ
                    </button>
                </NavLink>
            </form>
            <img src={catLogo} alt="cat" className={styles.basket__catLogo}/>
        </div>
    )
}

export default Basket