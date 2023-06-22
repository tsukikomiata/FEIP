import styles from "./Menu.module.css"
import ProductCard from "../ProductCard/ProductCard";
import catLogo from "../../images/cat.svg";


function Menu({products}) {
    return (
        <div className={styles.menu}>
            {products.map((option)=> <ProductCard product={option}/>)}
            <img src={catLogo} alt="cat" className={styles.menu__catLogo}/>
        </div>
    )
}

export default Menu
