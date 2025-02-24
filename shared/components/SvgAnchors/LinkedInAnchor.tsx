"use client"
import LinkedIn from "@/public/LinkedIn.svg"

import IconAnchor from "./IconAnchor/IconAnchor";

interface LinkedInAnchorProps {
    href: string;
}

const LinkedInAnchor = ({ href }: LinkedInAnchorProps) => {
    return (
        <IconAnchor href={href}>
            <LinkedIn
                width={32}
                height={32}
                alt="Damir Portnov Telegram Anchor"
            />
        </IconAnchor>
    )
}

export default LinkedInAnchor


