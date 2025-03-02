import { Resend } from "resend";

import { MailTemplate } from "./MailTemplate";


export async function MailFormSubmit(fromData: FormData): Promise<void> {

    const mail = fromData.get("mail") as string;
    const content = fromData.get("content") as string;
    const resend = new Resend("re_H4B88Yjs_8MzvftibfxrEAn7JBmRqjw71");

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "damirchot@gmail.com",
        subject: "Hiring",
        react: MailTemplate({ mail: mail, content: content })
    });

}