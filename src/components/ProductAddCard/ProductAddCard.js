import styles from "./ProductAddCard.module.css"
import catLogo from "../../images/cat.svg";
import postRequest from "../../api/PostRequest";
import addProduct from "../../images/addProduct.jpg"


function ProductAddCard() {
    async function onClick(event) {
        event.preventDefault();
        const data = {
            name: event.target.elements.name.value,
            description: event.target.elements.description.value,
            category: event.target.elements.category.value,
            price: event.target.elements.cost.value
        }
        await postRequest(data, "http://localhost:8000/api/product")
    }

    return (
        <div className={styles.productAdd}>
            <div className={styles.file}>
                <img src={addProduct} alt={"file"}/>
            </div>
            <div className={styles.productAdd__content}>
                <form className={styles.productAdd__form} onSubmit={onClick}>
                    <input
                        placeholder="Название"
                        type="text"
                        id="name"
                    />
                    <input
                        placeholder="Описание"
                        type="text"
                        id="description"
                    />
                    <input
                        placeholder="Категория"
                        type="text"
                        id="category"
                    />
                    <input
                        placeholder="Стоимость"
                        type="number"
                        id="cost"
                    />
                    <button type="submit" className={styles.productAdd__content_button}>
                        Добавить товар
                    </button>

                    <img src={catLogo} alt="cat" className={styles.menu__catLogo}/>
                </form>
            </div>
        </div>
    )
}

export default ProductAddCard