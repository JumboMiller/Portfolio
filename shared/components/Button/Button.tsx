import classNames from "classnames";
import { ButtonHTMLAttributes,ReactNode } from "react";

import style from "./Button.module.scss";
import { ButtonTypes } from "./ButtonEnum";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonTypes;
    children: ReactNode;
}

const Button = ({ variant, children, className, onClick, ...props }: ButtonProps) => {
    return (
        <button
            className={classNames(style[`variant_${variant}`], className)}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
