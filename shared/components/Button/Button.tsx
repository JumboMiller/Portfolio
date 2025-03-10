import classNames from "classnames";
import Image from "next/image";
import { ButtonHTMLAttributes, ReactNode } from "react";

import style from "./Button.module.scss";
import { ButtonTypes } from "./ButtonEnum";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonTypes;
    children?: ReactNode;
    iconSrc?: string; // Добавляем поддержку иконок
}

const Button = ({ variant, children, className, iconSrc, ...props }: ButtonProps) => {
    return (
        <button className={classNames(style[`variant_${variant}`], className ?? "")} {...props}>
            {variant === ButtonTypes.ICON && iconSrc ? (
                <Image src={iconSrc} alt="icon" width={24} height={24} />
            ) : (
                children
            )}
        </button>
    );
};

export default Button;
