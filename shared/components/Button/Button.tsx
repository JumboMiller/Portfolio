import classNames from "classnames";
import Image from "next/image";
import { ButtonHTMLAttributes, ReactNode } from "react";

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
            {
                variant === ButtonTypes.TEXT
                    ?
                    children
                    :
                    <Image
                        src={`./${children}.svg`}
                        alt={`${children} 
                        ${variant}`}
                    />
            }
        </button>
    );
};

export default Button;
