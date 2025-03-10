import classNames from "classnames";
import Link from "next/link";
import React, { forwardRef, MouseEventHandler, ReactNode } from "react";

import style from "./A.module.scss";

interface AProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  target?: string; 
}

const A = forwardRef<HTMLAnchorElement, AProps>(
  ({ href, children, className, onClick, target = "_self" }, ref) => { 
    return (
      <Link href={href} passHref legacyBehavior>
        <a
          ref={ref}
          className={classNames(style.link, className)}
          onClick={onClick}
          target={target} 
        >
          {children}
        </a>
      </Link>
    );
  }
);

A.displayName = "A";

export default A;
