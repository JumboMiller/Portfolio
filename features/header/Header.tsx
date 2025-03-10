"use client"
import classNames from "classnames";
import { useTranslations } from "next-intl";
import { useState } from "react";

import ThemeSwitcher from "@/features/header/ThemeSwitcher/ThemeSwitcher";
import Logo from "@/public/logo.svg";
import A from "@/shared/components/A/A";
import useScroll from "@/shared/hooks/isScrolled";
import useLockScroll from "@/shared/hooks/useLockScroll";

import styles from "./Header.module.scss";
import LocaleSwitcher from "./LocaleSwitcher/LocaleSwitcher";

export interface HeaderItem {
    text: string
    anchor: string
}

const Header = () => {

    const headerItems: HeaderItem[] = [
        { text: "About", anchor: "#hero" },
        { text: "Skills", anchor: "#skills" },
        { text: "Work Experience", anchor: "#experience" },
        { text: "Portfolio", anchor: "#projects" },
        { text: "Contacts", anchor: "#contacts" }
    ]

    const intl = useTranslations("Header");

    const [isOpen, setIsOpen] = useState(false);

    useLockScroll(isOpen);

    const isScrolled = useScroll();

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const closeMenu = () => {
      if (isOpen) {
        setIsOpen(!isOpen)
      }
    }

    return (
        <header className={classNames(styles.base, { [styles.is_scrolled]: isScrolled })} >
            <div className={classNames("animate__animated animate__fadeInDown", styles.inner)}>
                <A href="#hero" onClick={closeMenu}>
                    <Logo
                        className={styles.logo}
                        width={64}
                        height={64}
                        alt="Damir Portnov Logo"

                    />
                </A>
                <div className={classNames(styles.menu, { [styles.is_open]: isOpen })}>
                    <nav>
                        <ul className={styles.menu_list}>
                            {headerItems.map((item, key) =>

                                <A key={key} href={item.anchor} onClick={closeMenu}>
                                    <li>
                                        {intl(item.text)}
                                    </li>
                                </A>
                            )}
                        </ul>
                    </nav>
                    <div className={styles.options}>
                        <LocaleSwitcher />
                        <ThemeSwitcher />
                    </div>
                </div>
                <button className={classNames(styles.burger_icon, { [styles.is_open]: isOpen })} onClick={toggleMenu}>
                    <span className={styles.burger_icon_item}></span>
                    <span className={styles.burger_icon_item}></span>
                    <span className={styles.burger_icon_item}></span>
                </button>
            </div>
        </header>
    );
};

export default Header;
