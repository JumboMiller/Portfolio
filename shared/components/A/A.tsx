import classNames from "classnames";
import Link from "next/link";
import React, { forwardRef, ReactNode } from "react";

import style from "./A.module.scss";

interface AProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const A = forwardRef<HTMLAnchorElement, AProps>(({ href, children, className }, ref) => {
  return (
    <Link
      href={href}
      className={classNames(style["link"], className)}
      ref={ref}
    >
      {children}
    </Link>
  );
});

A.displayName = "A";

export default A;
