import styles from "./Info.module.css";
import { ArrowUpRight } from "lucide-react";

function Info() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftSect}>
          <section>
            <p className={styles.label}>Email</p>
            <div
              className={styles.copyWrapper}
              onClick={() =>
                navigator.clipboard.writeText("thomas.san03@gmail.com")
              }
            >
              <p className={styles.email} data-cursor="link">
                thomas.san03@gmail.com
              </p>
              <p className={styles.copy} data-cursor="link">
                Copy
              </p>
            </div>
          </section>
          <section>
            <p className={styles.label}>Socials</p>
            <div className={styles.linkStack}>
              <a
                href="https://github.com/thwmskm"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                data-cursor="link"
              >
                Github<ArrowUpRight className={styles.linkArrow}></ArrowUpRight>
              </a>
              <a
                href="https://www.linkedin.com/in/hwan-kim-399483205/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                data-cursor="link"
              >
                LinkedIn
                <ArrowUpRight className={styles.linkArrow}></ArrowUpRight>
              </a>
            </div>
          </section>
          <section>
            <p className={styles.label}>Resume</p>
            <a
              href="/Hwan_Kim_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              data-cursor="link"
            >
              View<ArrowUpRight className={styles.linkArrow}></ArrowUpRight>
            </a>
          </section>
        </div>

        <div className={styles.middleSect}>
          <div className={styles.wrapper}>
            <img src="/h1.webp" alt="Home Image 2" className={styles.img}></img>
            <p className={styles.caption}>Lotte Tower, Seoul, South Korea</p>
          </div>
        </div>

        <div className={styles.rightSect}>
          <p className={styles.intro}>
            I design and build apps that are both intuitive and enjoyable to
            use. My work focuses on creating solutions to real-world problems,
            with an emphasis on thoughtful user experience. Born in South Korea
            and raised in Canada, I value cultural diversity and strive to
            reflect inclusivity in every project I create. I’m on a continuous
            journey of learning and growth, I invite you to explore this journey
            with me through my work.
          </p>
        </div>
      </div>
    </>
  );
}

export default Info;
