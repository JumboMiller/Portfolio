"use client"
import SocialIcon from "@/shared/components/SocialIcon/SocialIcon";

import IconAnchor from "./IconAnchor/IconAnchor";

interface GitHubAnchorProps {
    href: string;
}

const GitHubAnchor = ({ href }: GitHubAnchorProps) => {
    return (
        <IconAnchor href={href}>
            <SocialIcon
                type="github"
                width={32}
                height={32}
                ariaLabel="GitHub Project Anchor"
            />
        </IconAnchor>
    )
}

export default GitHubAnchor


