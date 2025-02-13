"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import Button from "@/shared/components/Button/Button";
import { ButtonTypes } from "@/shared/components/Button/ButtonEnum";
import { ThemeType } from "@/shared/types/ThemeType";

const COOKIE_NAME = "theme";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 14;

export default function ThemeSwitcher() {
    const themes = Object.values(ThemeType);
    const [theme, setTheme] = useState<ThemeType>(ThemeType.LIGHT);
    const intl = useTranslations("Header");

    useEffect(() => {
        const currentTheme = getCookie(COOKIE_NAME) as ThemeType;
        if (themes.includes(currentTheme)) {
            setTheme(currentTheme);
            applyTheme(currentTheme);
        }
    }, []);


    const handleThemeChange = (newTheme: ThemeType) => {
        setCookie(COOKIE_NAME, newTheme, COOKIE_MAX_AGE);
        setTheme(newTheme);
        applyTheme(newTheme);
    };


    const applyTheme = (theme: ThemeType) => {
        document.documentElement.setAttribute("data-theme", theme);
    };


    const setCookie = (name: string, value: string, maxAge: number) => {
        document.cookie = `${name}=${value}; path=/; max-age=${maxAge}`;
    };


    const getCookie = (name: string): string | null => {
        const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
        return match ? match[2] : null;
    };


    const toggleTheme = () => {
        const currentIndex = themes.indexOf(theme);
        const nextIndex = (currentIndex + 1) % themes.length;
        const nextTheme = themes[nextIndex];
        handleThemeChange(nextTheme);
    };

    return (
        <Button variant={ButtonTypes.TEXT} onClick={toggleTheme}>
            {intl("Theme Switcher")}
        </Button>
    );
}
