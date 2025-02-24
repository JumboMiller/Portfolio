"use client"
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

interface AnimateOnViewProps {
    children: React.ReactNode;
    className?: string;
    animationClass?: string;
    threshold?: number;
}

const AnimateOnView = ({ children, className, animationClass, threshold = 0.2 }: AnimateOnViewProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [threshold]);

    return (
        <div ref={ref} className={classNames(className, { [animationClass || ""]: isVisible })}>
            {children}
        </div>
    );
};

export default AnimateOnView;
