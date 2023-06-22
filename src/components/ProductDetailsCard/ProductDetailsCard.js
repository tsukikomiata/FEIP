import styles from "./ProductDetailsCard.module.css"

function ProductDetailsCard({product}) {
    return (
        <div className={styles.productCard__content}>
            <img src={product.image} alt="avatar"/>
            <div className={styles.productCard__content_info}>
                <p>Название: {product.name}</p>
                <p>Описание: {product.description}</p>
                <p>Цена: {product.price}</p>
            </div>
        </div>
    )
}

export default ProductDetailsCard