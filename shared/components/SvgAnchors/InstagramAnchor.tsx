"use client"
import SocialIcon from "@/shared/components/SocialIcon/SocialIcon";

import IconAnchor from "./IconAnchor/IconAnchor";

interface InstagramAnchorProps {
    href: string;
}

const InstagramAnchor = ({ href }: InstagramAnchorProps) => {
    return (
        <IconAnchor href={href}>
            <SocialIcon
                type="instagram"
                width={32}
                height={32}
                ariaLabel="Damir Portnov Instagram Anchor"
            />
        </IconAnchor>
    )
}

export default InstagramAnchor


