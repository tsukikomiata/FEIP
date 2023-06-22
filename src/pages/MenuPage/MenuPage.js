import styles from "./MenuPage.module.css"
import Sidebar from "../../components/Sidebar/Sidebar";
import Menu from "../../components/Menu/Menu";
import {useState} from "react";
import {GetRequest} from "../../api/GetRequest"
import MenuTabBar from "../../components/MenuTabBar/MenuTabBar";

const defaultProducts = []

function MenuPage({user}) {
    const [products, setProducts] = useState(defaultProducts)
    const [filterProducts, setFilterProducts] = useState(defaultProducts)
    const API_URL = 'http://localhost:8000/api/product/'

    useState(async () => {
        await GetRequest(defaultProducts, setProducts, API_URL)
        await GetRequest(defaultProducts, setFilterProducts, API_URL)
    })

    return (
        <div className={styles.menuPage}>
            <Sidebar item="menu" user={user}/>
            <div className={styles.menuPage__content}>
                <MenuTabBar products={products} setProducts={setFilterProducts}/>
                <Menu products={filterProducts}/>
            </div>
        </div>
    )
}

export default MenuPage