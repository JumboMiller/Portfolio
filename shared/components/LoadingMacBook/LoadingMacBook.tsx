import styles from "./LoadingMacBook.module.scss"

const LoadingMacBook = () => {
    const topKeys = Array.from({ length: 13 }, (_, i) => i + 1);
    const bottomKeys = Array.from({ length: 11 }, (_, i) => i + 14);

    return (
        <div className={styles.container}>
            <div className={styles.macbook}>
                <div className={styles.macbook_topBoard}>
                    <div className={styles.macbook_display}>
                        <div className={styles.macbook_load}></div>
                    </div>
                </div>
                <div className={styles.macbook_underBoard}>
                    <div className={styles.macbook_keybord}>
                        <div className={styles.keybord}>
                            <div className={styles.keybord_touchBar}></div>
                            <ul className={styles.keybord_keyBox}>
                                {topKeys.map(key => (
                                    <li className={`${styles.keybord_key} ${styles[`keybord_key_${key}`]}`} key={key}></li>
                                ))}
                            </ul>
                            <ul className={styles.keybord_keyBox_under}>
                                {bottomKeys.map(key => (
                                    <li className={`${styles.keybord_key} ${styles[`keybord_key_${key}`]}`} key={key}></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default LoadingMacBook