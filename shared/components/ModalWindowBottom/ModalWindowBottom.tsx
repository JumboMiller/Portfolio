import { ReactNode } from "react";

import styles from "./ModalWindowBottom.module.scss"

interface ModalWindowBottomProps {
    children?: ReactNode;
}
const ModalWindowBottom = ({ children }: ModalWindowBottomProps) => {
    return (
        <div className={styles.modal}>
            {children}
        </div>
    )
}

export default ModalWindowBottom
