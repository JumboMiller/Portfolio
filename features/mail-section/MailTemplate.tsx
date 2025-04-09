interface MailTemplateProps {
    mail: string;
    content: string;
}

export const MailTemplate = ({
    mail,
    content
}: MailTemplateProps) => (
    <div>
        <h3>{mail}</h3>
        <p>{content}</p>
    </div>
);