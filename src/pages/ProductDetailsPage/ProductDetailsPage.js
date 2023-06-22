import styles from "./ProductDetailsPage.module.css"
import Sidebar from "../../components/Sidebar/Sidebar";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import {useState} from "react";
import {useParams} from "react-router";
import {GetRequest} from "../../api/GetRequest";


const defaultProduct = {}

function ProductDetailsPage({user}) {
    const [product, setProduct] = useState(defaultProduct)
    const API_URL = 'http://localhost:8000/api/product/' + useParams().id

    useState(async () => {
        await GetRequest(defaultProduct, setProduct, API_URL)
    })

    return (
        <div className={styles.productDetailsPage}>
            <Sidebar item="" user={user}/>
            <div className={styles.productDetailsPage__content}>
                <ProductDetails product={product}/>
            </div>
        </div>
    )
}

export default ProductDetailsPage