import Image from "next/image";

import Button from "@/shared/components/Button/Button";
import { ButtonTypes } from "@/shared/components/Button/ButtonEnum";

import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__inner}>
        <div className={styles.hero__body}>
          <h1>HELLO! <br/>  MY NAME IS <span className="accent-color">DAMIR PORTNOV</span> <br/> TIME TO <span className="accent-color">CODE</span> !</h1>
          <Button variant={ButtonTypes.TEXT}>My Contacts</Button>

        </div>
        <div className={styles.hero__graphic}>
          <Image src={"/face.jpg"} width={200} height={200} alt="Damir Portnov Photo" />
        </div>

      </div>
    </div>
  )
}

export default Hero