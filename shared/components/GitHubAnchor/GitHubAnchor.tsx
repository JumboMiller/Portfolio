"use client"

import GitHub from "@/public/GitHub.svg"
import A from "@/shared/components/A/A";

import styles from "./GitHubAnchor.module.scss";

interface GitHubProps {
    href: string;
}

const GitHubAnchor = ({ href }: GitHubProps) => {

    return (
        <div className={styles.git}>
            <A className={styles.git_a} href={href}>
                <GitHub
                    className={styles.git_icon}
                    width={32}
                    height={32}
                    alt="GitHub Project Anchor"
                />
            </A>
        </div>
    )
}

export default GitHubAnchor