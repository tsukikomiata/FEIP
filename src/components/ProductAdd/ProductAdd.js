import styles from "./ProductAdd.module.css"
import ProductAddCard from "../ProductAddCard/ProductAddCard.js";

function ProductAdd() {
    return (
        <div className={styles.productAdd}>
            <ProductAddCard/>
        </div>
    )
}

export default ProductAdd

