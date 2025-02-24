import GitHubAnchor from "@/shared/components/SvgAnchors/GitHubAnchor"
import GmailAnchor from "@/shared/components/SvgAnchors/GmailAnchor"
import LinkedInAnchor from "@/shared/components/SvgAnchors/LinkedInAnchor"
import TelegramAnchor from "@/shared/components/SvgAnchors/TelegramAnchor"

import styles from "./Footer.module.scss"

const Footer = () => {
    return (
        <footer className={styles.base}>
            <div className={styles.inner}>
                <div className={styles.content}>
                    <div className={styles.info}>
                        <h3>Do you want to ask me ?</h3>
                        <p> Contact me. I am in touch mon-fri from 8 am to 8 pm (gmt). </p>
                    </div>
                    <div className={styles.contacts}>
                        <div className={styles.icons}>
                            <GitHubAnchor href={""} />
                            <TelegramAnchor href={""} />
                            <LinkedInAnchor href={""} />
                            <GmailAnchor href={""} />
                        </div>
                        <div className={styles.copyright}>
                            © Damir Portnov - 2025
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
