import logo from "../../images/logo.jpg"
import SidebarItem from "./SidebarItem.js"
import styles from "./Sidebar.module.css"
import {NavLink} from "react-router-dom";


const userData = [{text: "меню", type: "menu"},
                {text: "корзина", type: "basket"},
                {text: "личный кабинет", type: "profile"},
                {text: "мои заказы", type: "orders"}]
const employeeData = [{text: "меню", type: "menu"},
                    {text: "корзина", type: "basket"},
                    {text: "личный кабинет", type: "profile"},
                    {text: "мои заказы", type: "orders"},
                    {text: "текущие заказы", type: "current"},
                    {text: "добавить товар", type: "add"}]

function Sidebar({item, user}) {
    let options = []
    const type = user.type
    if (type === "employee") {
        options = employeeData
    } else if (type === "user") {
        options = userData
    }

    return (
        <div className={styles.sidebar}>
            <NavLink to="/home" className={styles.sidebar__logo}>
                <img src={logo} className={styles.sidebar__logo} alt={"logo"}/>
            </NavLink>
             <div className={styles.sidebar__content}>
                {options.map((option)=> <SidebarItem text={option.text}
                                                  active={(option.type === item)}
                                                    link={"/" + option.type}/>)}
             </div>
             <div className={styles.sidebar__footer}>
                 <div className={styles.sidebar__footer_places}>
                     <p className={styles.sidebar__footer_places_title}>Время работы:</p>
                     <p className={styles.sidebar__footer_places_text}> пн-сб: 10:00-22:00</p>
                     <p className={styles.sidebar__footer_places_text}> вс: 12:00-22:00</p>
                 </div>
                 <div className={styles.sidebar__footer_time}>
                     <p className={styles.sidebar__footer_time_title}>Вечерние скидки:</p>
                     <p className={styles.sidebar__footer_time_text}>пн-пт: 19:00-22:00</p>
                     <p className={styles.sidebar__footer_time_text}>сб-вс: 18:00-22:00</p>
                 </div>
             </div>
        </div>
    )
}

export default Sidebar