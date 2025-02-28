interface MailTemplateProps {
    mail: string;
    content: string;
}

export const MailTemplate = ({
    mail,
    content
}: MailTemplateProps) => (
    <div>
        <h1>{mail}</h1>
        <p>{content}</p>
    </div>
);