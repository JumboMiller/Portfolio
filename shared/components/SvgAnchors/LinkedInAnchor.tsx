"use client"
import SocialIcon from "@/shared/components/SocialIcon/SocialIcon";

import IconAnchor from "./IconAnchor/IconAnchor";

interface LinkedInAnchorProps {
    href: string;
}

const LinkedInAnchor = ({ href }: LinkedInAnchorProps) => {
    return (
        <IconAnchor href={href}>
            <SocialIcon
                type="linkedin"
                width={32}
                height={32}
                ariaLabel="Damir Portnov LinkedIn Anchor"
            />
        </IconAnchor>
    )
}

export default LinkedInAnchor


