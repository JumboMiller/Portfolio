"use client";

import { useTranslations } from "next-intl";

import AnimateOnView from "@/shared/components/AnimateOnView/AnimateOnView";
import Button from "@/shared/components/Button/Button";
import { ButtonTypes } from "@/shared/components/Button/ButtonEnum";

import styles from "./Mail.module.scss";
import { MailFormSubmit } from "./MailAction";

const Mail = () => {
    const intl = useTranslations("Mail");

    return (
        <section id="contacts" className={styles.mail}>
            <div className={styles.inner}>
                <div className={styles.content}>
                    <AnimateOnView className={styles.form} animationClass="animate__animated animate__fadeIn">
                        <form className={styles.formControl} action={MailFormSubmit}>
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
                                    />
                                </div>
                            </div>
                            <Button className={styles.submitBtn} variant={ButtonTypes.TEXT} type="submit">
                                {intl("sendButton")}
                            </Button>
                        </form>
                    </AnimateOnView>
                </div>
            </div>
        </section>
    );
};

export default Mail;
