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
    <div className={styles.base}>
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
              />
            </h1>
            <Button className={styles.contact_btn} variant={ButtonTypes.TEXT}>{intl("ContactsButton")}</Button>
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