import styles from "./UserOrdersPage.module.css"
import Sidebar from "../../components/Sidebar/Sidebar";
import UserOrders from "../../components/UserOrders/UserOrders";
import {GetRequest} from "../../api/GetRequest";
import {useState} from "react";


const defaultOrder = []

function UserOrdersPage({user}) {
    const [order, setOrder] = useState(defaultOrder)

    useState(async ()=> {
        await GetRequest(defaultOrder, setOrder, `http://localhost:8000/api/order/user/${user.username}`)
    })

    return (
        <div className={styles.userOrdersPage}>
            <Sidebar item="orders" user={user}/>
            <div className={styles.userOrdersPage__content}>
                <UserOrders orders={order}/>
            </div>
        </div>
    )
}

export default UserOrdersPage
