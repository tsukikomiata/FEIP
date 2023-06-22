import styles from "./CurrentOrdersCardItem.module.css"
import {useState} from "react";
import {GetRequest} from "../../api/GetRequest";

const defaultProduct = {}

function CurrentOrdersCardItem({name}) {
    const [product, setProduct] = useState(defaultProduct)

    useState(async () => {
        await GetRequest(defaultProduct, setProduct, `http://localhost:8000/api/product/${name}`)
    })

    return (
        <div className={styles.orderCardItem}>
            <p className={styles.orderCardItem__title}>{product.name}</p>
            <p>{product.price}</p>
        </div>
    )
}

export default CurrentOrdersCardItem