import Image from "next/image";
import { useTranslations } from "next-intl";

import Button from "@/shared/components/Button/Button";
import { ButtonTypes } from "@/shared/components/Button/ButtonEnum";

import styles from "./Hero.module.scss";

const Hero = () => {

  const intl = useTranslations("Hero");

  return (
    <div className={styles.hero}>
      <div className={styles.hero__inner}>
        <div className={styles.hero__body}>
          <h1>
            {intl("Greeting")} <br />
            {intl("Introduction")} <span className="accent-color">{intl("Name")}</span> <br />
            {intl.raw("CallToAction")} <span className="accent-color">{intl("CallToActionSpan")}</span> 
          </h1>
          <Button variant={ButtonTypes.TEXT}>{intl("ContactsButton")}</Button>


        </div>
        <div className={styles.hero__graphic}>
          <Image src={"/face.jpg"} width={250} height={250} alt="Damir Portnov Photo" />
        </div>

      </div>
    </div>
  )
}

export default Hero