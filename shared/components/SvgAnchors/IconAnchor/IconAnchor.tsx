"use client"

import { ReactNode } from "react";

import A from "@/shared/components/A/A";

import styles from "./IconAnchor.module.scss";

interface IconAnchorProps {
    children:ReactNode;
    href: string;
}

const IconAnchor = ({ href , children }: IconAnchorProps) => {

    return (
        <div className={styles.base}>
            <A className={styles.base_a} href={href} target="_black">
                {children}
            </A>
        </div>
    )
}

export default IconAnchor