import Image from "next/image";
import { useTranslations } from "next-intl";

import Button from "@/shared/components/Button/Button";
import { ButtonTypes } from "@/shared/components/Button/ButtonEnum";
import TypeWriter from "@/shared/components/TypeWriter/TypeWriter";

import styles from "./Hero.module.scss";

const Hero = () => {

  const intl = useTranslations("Hero");

  return (
    <div className={styles.base}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            <TypeWriter
              texts={[
                intl.raw("Greeting"),
                intl.raw("Specialize"),
                intl.raw("CallMe")
              ]}
            />
          </h1>
          <Button variant={ButtonTypes.TEXT}>{intl("ContactsButton")}</Button>
        </div>
        <div className={styles.img_box}>
          <Image className={styles.icon} src={"/face.jpg"} width={250} height={250} alt="Damir Portnov Photo" />
        </div>

      </div>
    </div>
  )
}

export default Hero