"use client"
import Instagram from "@/public/Instagram.svg"

import IconAnchor from "./IconAnchor/IconAnchor";

interface InstagramAnchorProps {
    href: string;
}

const InstagramAnchor = ({ href }: InstagramAnchorProps) => {
    return (
        <IconAnchor href={href}>
            <Instagram
                width={32}
                height={32}
                alt="Damir Portnov Instagram Anchor"
            />
        </IconAnchor>
    )
}

export default InstagramAnchor


