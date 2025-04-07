import classNames from "classnames";
import { useTranslations } from "next-intl";

import Button from "@/shared/components/Button/Button";
import { ButtonTypes } from "@/shared/components/Button/ButtonEnum";
import LoadingMacBook from "@/shared/components/LoadingMacBook/LoadingMacBook";
import TypeWriter from "@/shared/components/TypeWriter/TypeWriter";

import styles from "./Hero.module.scss";

const Hero = () => {

  const intl = useTranslations("Hero");

  return (
    <div id="hero" className={styles.base}>
      <div className={styles.inner}>
        <div className={classNames("animate__animated animate__fadeIn", styles.content)}>
          <div className={styles.text}>
            <h1 className={styles.title}>
              <TypeWriter
                texts={[
                  intl.raw("Greeting"),
                  intl.raw("Specialize"),
                  intl.raw("CallMe")
                ]}
                delay={35}
                deleteSpeed={20}
              />
            </h1>
            <div className={styles.buttons}>
              <a href="#contacts">
                <Button variant={ButtonTypes.TEXT} >{intl("ContactsButton")}</Button>
              </a>
              <a href="/DAMIR PORTNOV CV.pdf" download>
                <Button variant={ButtonTypes.TEXT} >{intl("DownloadCV")}</Button>
              </a>
            </div>
          </div>
          <div className={styles.macbook}>
            <LoadingMacBook />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero