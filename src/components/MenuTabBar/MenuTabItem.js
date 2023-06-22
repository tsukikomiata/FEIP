import styles from "./MenuTabs.module.css";


const Tab = ({dataChanger, activeChanger, tabTitle, isActive}) => (
    <div
        className={`${styles.tab} ${isActive && styles.active_tab}`}
        onClick={() => {
            dataChanger();
            activeChanger();
        }}
    >
        <span className={styles.tab_title}>{tabTitle}</span>
    </div>
);

export default Tab;