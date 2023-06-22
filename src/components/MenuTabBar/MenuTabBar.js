import { useState } from "react";
import styles from "./MenuTabs.module.css";
import Tab from "./MenuTabItem";


const MenuTabBar = ({products, setProducts}) => {
    const tabs = [
        {
            name: "All",
            onclick: () => setProducts(products),
        },
        {
            name: "Coffee",
            onclick: () => setProducts(products.filter((value) => value.category === "coffee")),
        },
        {
            name: "Tea",
            onclick: () => setProducts(products.filter((value) => value.category === "tea")),
        },
        {
            name: "Food",
            onclick: () => setProducts(products.filter((value) => value.category === "food")),
        },
        {
            name: "Desserts",
            onclick: () => setProducts(products.filter((value) => value.category === "desserts")),
        },
        {
            name: "Syrup",
            onclick: () => setProducts(products.filter((value) => value.category === "syrup")),
        },
        {
            name: "Other",
            onclick: () => setProducts(products.filter((value) => value.category === "other")),
        },
    ];
    const [activeTab, setActiveTab] = useState(0);
    const tabItems = tabs.map((value, index) => (
        <Tab
            activeChanger={() => setActiveTab(index)}
            dataChanger={value.onclick}
            tabTitle={value.name}
            isActive={activeTab === index}
        />
    ));
    return <div className={styles.container}>{tabItems}</div>;
};

export default MenuTabBar;