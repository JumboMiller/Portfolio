"use client"
import GitHub from "@/public/GitHub.svg"

import IconAnchor from "./IconAnchor/IconAnchor";

interface GitHubAnchorProps {
    href: string;
}

const GitHubAnchor = ({ href }: GitHubAnchorProps) => {
    return (
        <IconAnchor href={href}>
            <GitHub
                width={32}
                height={32}
                alt="GitHub Project Anchor"
            />
        </IconAnchor>
    )
}

export default GitHubAnchor


