"use client"
import { useTranslations } from "next-intl";

import ThemeSwitcher from "@/features/header/ThemeSwitcher/ThemeSwitcher";
import Logo from "@/public/logo.svg"
import A from "@/shared/components/A/A";

import style from "./Header.module.scss"
import LocaleSwitcher from "./LocaleSwitcher/LocaleSwitcher";

export interface HeaderItem {
    text: string
}
type HeaderProps = {
    headerItems: HeaderItem[]
}

const Header = ({ headerItems }: HeaderProps) => {

    const intl = useTranslations("Header");
    return (
        <header className={style.header}>
            <div className={style.header__inner}>
                <Logo
                    className={style.header__logo}
                    width={64}
                    height={64}
                    alt="Damir Portnov Logo"
                />
                <nav >
                    <ul className={style.header__menu_list}>
                        {headerItems.map((item, key) =>
                            <A key={key} href='#'>
                                <li>
                                    {intl(`${item.text}`)}
                                </li>
                            </A>
                        )}
                    </ul>
                </nav>
                <div>
                    <LocaleSwitcher />
                    <ThemeSwitcher />
                </div>
            </div>
        </header>
    );
};

export default Header;
