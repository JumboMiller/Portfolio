import { Resend } from "resend";

import { MailTemplate } from "./MailTemplate";

export async function MailFormSubmit(
    _prevState: MailFormState,
    formData: FormData
): Promise<MailFormState> {
    const mail = formData.get("mail") as string;
    const content = formData.get("content") as string;

    if (!mail || !content) {
        return { success: false, message: "All fields are required." };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(mail)) {
        return { success: false, message: "Invalid email format." };
    }

    if (/\r|\n/.test(mail)) {
        return { success: false, message: "Invalid email characters." };
    }

    if (content.trim().length < 2) {
        return {
            success: false,
            message: "Message must be at least 2 characters long.",
        };
    }

    const containsHTML = /<[^>]*>/g.test(content);
    const containsScript = /<script\b[^>]*>([\s\S]*?)<\/script>/gi.test(content);

    if (containsScript) {
        return {
            success: false,
            message: "Malicious content detected: scripts are not allowed.",
        };
    }

    if (containsHTML) {
        return {
            success: false,
            message: "HTML tags are not allowed in the message.",
        };
    }

    try {
        const resend = new Resend(process.env.RESEND_KEY);

        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "damirchot@gmail.com",
            subject: "Hiring",
            react: MailTemplate({ mail, content }),
        });

        return { success: true, message: "Message sent successfully!" };
    } catch (error: unknown) {
        let errorMessage = "Unknown error.";
        if (error instanceof Error) {
            errorMessage = error.message;
        }

        return {
            success: false,
            message: `Failed to send message. ${errorMessage}`,
        };
    }
}

export type MailFormState = {
    success: boolean;
    message: string;
};