"use client"
import SocialIcon from "@/shared/components/SocialIcon/SocialIcon";

import IconAnchor from "./IconAnchor/IconAnchor";

interface GmailAnchorProps {
    href: string;
}

const GmailAnchor = ({ href }: GmailAnchorProps) => {
    return (
        <IconAnchor href={href}>
            <SocialIcon
                type="gmail"
                width={32}
                height={32}
                ariaLabel="Damir Portnov Gmail Anchor"
            />
        </IconAnchor>
    )
}

export default GmailAnchor


