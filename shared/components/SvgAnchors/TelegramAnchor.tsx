"use client"
import SocialIcon from "@/shared/components/SocialIcon/SocialIcon";

import IconAnchor from "./IconAnchor/IconAnchor";

interface TelegramAnchorProps {
    href: string;
}

const TelegramAnchor = ({ href }: TelegramAnchorProps) => {
    return (
        <IconAnchor href={href}>
            <SocialIcon
                type="telegram"
                width={32}
                height={32}
                ariaLabel="Damir Portnov Telegram Anchor"
            />
        </IconAnchor>
    )
}

export default TelegramAnchor


