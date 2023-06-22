import styles from "./ProductCard.module.css"
import {useNavigate} from "react-router";

function ProductCard({product}) {
    const navigate = useNavigate();

    return (
        <div className={styles.productCard}>
            <img src={product.image} alt="avatar"/>
            <div className={styles.productCard__content}>
                <div className={styles.productCard__content_info}>
                    <p>Название: {product.name}</p>
                    <p>Описание: {product.description}</p>
                    <p>Цена: {product.price}</p>
                </div>
                <button type="submit" className={styles.productCard__content_button}
                        onClick={async () =>{navigate(`/product/${product.name}`)}}>
                    Подробнее
                </button>
            </div>
        </div>
    )
}

export default ProductCard
