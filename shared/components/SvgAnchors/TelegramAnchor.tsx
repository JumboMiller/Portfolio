"use client"
import Telegram from "@/public/Telegram.svg"

import IconAnchor from "./IconAnchor/IconAnchor";

interface TelegramAnchorProps {
    href: string;
}

const TelegramAnchor = ({ href }: TelegramAnchorProps) => {
    return (
        <IconAnchor href={href}>
            <Telegram
                width={32}
                height={32}
                alt="Damir Portnov Telegram Anchor"
            />
        </IconAnchor>
    )
}

export default TelegramAnchor


