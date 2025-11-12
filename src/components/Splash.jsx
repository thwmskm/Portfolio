import styles from "./Splash.module.css";
import { useEffect, useRef } from "react";

function Splash({ fade }) {
  const splashRef = useRef(null);

  useEffect(() => {
    const splashPage = splashRef.current;
    if (!splashPage) return;

    setTimeout(() => splashPage.classList.add(styles.show), 700);

    setTimeout(() => splashPage.classList.add(styles.hide), 2500);
  }, []);

  return (
    <div ref={splashRef} className={styles.splashPage}>
      <h1 className={styles.name}>
        H<span className={styles.nameSpace}>wan </span>K
        <span className={styles.nameSpace}>im</span>
        <span> Portfolio</span>.
      </h1>
    </div>
  );
}

export default Splash;
