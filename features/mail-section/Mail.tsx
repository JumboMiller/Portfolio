"use client";

import { useTranslations } from "next-intl";
import { useActionState } from "react";

import AnimateOnView from "@/shared/components/AnimateOnView/AnimateOnView";
import Button from "@/shared/components/Button/Button";
import { ButtonTypes } from "@/shared/components/Button/ButtonEnum";

import styles from "./Mail.module.scss";
import { MailFormState, MailFormSubmit } from "./MailAction";


const initialState: MailFormState = {
    success: false,
    message: "",
};

const Mail = () => {
    const intl = useTranslations("Mail");

    const [state, formAction, isPending] = useActionState<MailFormState, FormData>(
        MailFormSubmit,
        initialState
    );

    return (
        <section id="contacts" className={styles.mail}>
            <div className={styles.inner}>
                <div className={styles.content}>
                    <AnimateOnView className={styles.form} animationClass="animate__animated animate__fadeIn">
                        <form className={styles.formControl} action={formAction}>
                            <h3>{intl("title")}</h3>

                            <div className={styles.formInputs}>
                                <div className={styles.inputField}>
                                    <label className={styles.label}>{intl("emailLabel")}</label>
                                    <input
                                        required
                                        className={styles.input}
                                        type="text"
                                        name="mail"
                                        placeholder={intl("emailPlaceholder")}
                                        disabled={isPending}
                                    />
                                </div>

                                <div className={styles.inputField}>
                                    <label className={styles.label}>{intl("messageLabel")}</label>
                                    <textarea
                                        required
                                        rows={5}
                                        className={styles.input}
                                        name="content"
                                        placeholder={intl("messagePlaceholder")}
                                        disabled={isPending}
                                    />
                                </div>
                            </div>

                            <Button
                                className={styles.submitBtn}
                                variant={ButtonTypes.TEXT}
                                type="submit"
                                disabled={isPending}
                            >
                                {isPending ? intl("sending") : intl("sendButton")}
                            </Button>

                            {state.message && (
                                <label
                                    className={`${styles.modal} ${
                                        state.success ? styles.success : styles.error
                                    }`}
                                >
                                    { state.success ?  intl("successMessage") : state.message }
                                </label>
                            )}
                        </form>
                    </AnimateOnView>
                </div>
            </div>
        </section>
    );
};

export default Mail;
