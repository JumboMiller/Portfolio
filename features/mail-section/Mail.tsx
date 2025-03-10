"use client"

import AnimateOnView from "@/shared/components/AnimateOnView/AnimateOnView";
import Button from "@/shared/components/Button/Button";
import { ButtonTypes } from "@/shared/components/Button/ButtonEnum";

import styles from "./Mail.module.scss";
import { MailFormSubmit } from "./MailAction";

const Mail = () => {

    return (
        <section id="contacts" className={styles.mail}>
            <div className={styles.inner}>
                <div className={styles.content}>
                    <AnimateOnView className={styles.form} animationClass="animate__animated animate__fadeIn">
                        <form className={styles.formControl} action={MailFormSubmit}>
                            <h3>Send Me A Letter 📮</h3>
                            <div className={styles.formInputs}>
                                <div className={styles.inputField}>
                                    <label className={styles.label}>Your Email</label>
                                    <input required className={styles.input} type="text" name="mail" placeholder="Your Mail Address" />
                                </div>

                                <div className={styles.inputField}>
                                    <label className={styles.label} >Your Message</label>
                                    <textarea required rows={5} className={styles.input} name="content" placeholder="Your Mail Message Content & Text" />
                                </div>

                            </div>
                            <Button className={styles.submitBtn} variant={ButtonTypes.TEXT} type="submit">Send</Button>
                        </form>
                    </AnimateOnView>
                </div>
            </div>
        </section>
    )
}

export default Mail