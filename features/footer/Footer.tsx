"use client";

import { useTranslations } from "next-intl";

import GitHubAnchor from "@/shared/components/SvgAnchors/GitHubAnchor";
import GmailAnchor from "@/shared/components/SvgAnchors/GmailAnchor";
import InstagramAnchor from "@/shared/components/SvgAnchors/InstagramAnchor";
import LinkedInAnchor from "@/shared/components/SvgAnchors/LinkedInAnchor";
import TelegramAnchor from "@/shared/components/SvgAnchors/TelegramAnchor";

import styles from "./Footer.module.scss";

const Footer = () => {
    const intl = useTranslations("Footer");

    return (
        <footer className={styles.base}>
            <div className={styles.inner}>
                <div className={styles.content}>
                    <div className={styles.info}>
                        <h3>{intl("question")}</h3>
                        <p>{intl("contactInfo")}</p>
                    </div>
                    <div className={styles.contacts}>
                        <div className={styles.icons}>
                            <GitHubAnchor href="https://github.com/JumboMiller" />
                            <TelegramAnchor href="https://t.me/JumboMiller" />
                            <LinkedInAnchor href="https://www.linkedin.com/in/damir-portnov/" />
                            <InstagramAnchor href="https://www.instagram.com/jumbo_miller" />
                            <GmailAnchor href="mailto:damirchot@gmail.com" />
                        </div>
                        <div className={styles.copyright}>
                            © {intl("copyright")}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
