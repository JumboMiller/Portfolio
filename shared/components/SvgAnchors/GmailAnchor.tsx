"use client"
import Gmail from "@/public/Gmail.svg"

import IconAnchor from "./IconAnchor/IconAnchor";

interface GmailAnchorProps {
    href: string;
}

const GmailAnchor = ({ href }: GmailAnchorProps) => {
    return (
        <IconAnchor href={href}>
            <Gmail
                width={32}
                height={32}
                alt="Damir Portnov Gmail Anchor"
            />
        </IconAnchor>
    )
}

export default GmailAnchor


