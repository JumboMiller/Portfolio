"use client"

import styles from "./Mail.module.scss";
import { MailFormSubmit } from "./MailAction";

const Mail = () => {


    return (
        <section className={styles.mail}>
            <div className={styles.inner}>
                <div className={styles.content}>
                    <div className={styles.form}>
                        <form className={styles.formControl} action={MailFormSubmit}>
                            <p className={styles.title}>Mail Me</p>
                            <label className={styles.label}>Your Email</label>
                            <div className={styles.inputField}>
                                <input required className={styles.input} type="text" name="mail" placeholder="Your Mail" />
                            </div>
                            <label className={styles.label} >Write me a massage</label>
                            <div className={styles.inputField}>
                                <input required className={styles.input} type="text" name="content" placeholder="Your Mail" />
                            </div>
                            <a>Forgot your password?</a>
                            <button className={styles.submitBtn} type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mail