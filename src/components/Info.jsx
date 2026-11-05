import styles from "./Info.module.css";
import { ArrowUpRight } from "lucide-react";
import { useToast } from "./Toast.jsx";

function Info() {
  const { addToast } = useToast();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("thomas.san03@gmail.com");
      addToast("Copied!", "info", 1500);
    } catch {
      addToast("Unable to copy email.", "error");
    }
  };

  const frontend = ["JavaScript", "React", "React Native", "HTML", "CSS"];
  const backend = ["Node.js", "Express", "MySQL", "REST APIs"];
  const tools = ["Git", "Figma", "Playwright"];

  return (
    <div className={styles.container}>
      <div className={styles.profileSection}>
        <section className={styles.techSection}>
          <p className={styles.label}>Tech Stack</p>

          <div className={styles.techGroup}>
            <p className={styles.techCategory}>Frontend</p>
            <div className={styles.techList}>
              {frontend.map((tech) => (
                <span key={tech} className={styles.techItem}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.techGroup}>
            <p className={styles.techCategory}>Backend</p>
            <div className={styles.techList}>
              {backend.map((tech) => (
                <span key={tech} className={styles.techItem}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.techGroup}>
            <p className={styles.techCategory}>Tools & Testing</p>
            <div className={styles.techList}>
              {tools.map((tech) => (
                <span key={tech} className={styles.techItem}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className={styles.contactSection}>
        <section>
          <p className={styles.label}>Email</p>
          <div className={styles.copyWrapper} onClick={copyEmail}>
            <p className={styles.email} data-cursor="link">
              thomas.san03@gmail.com
            </p>
            <p className={styles.copy} data-cursor="link">
              Copy
            </p>
          </div>
        </section>

        {/* Original Socials */}
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
              Github
              <ArrowUpRight className={styles.linkArrow} />
            </a>

            <a
              href="https://www.linkedin.com/in/hwan-kim-399483205/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              data-cursor="link"
            >
              LinkedIn
              <ArrowUpRight className={styles.linkArrow} />
            </a>
          </div>
        </section>

        <section>
          <p className={styles.label}>Resume</p>
          <a
            href="/Hwan_Kim_CV5.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            data-cursor="link"
          >
            View
            <ArrowUpRight className={styles.linkArrow} />
          </a>
        </section>
      </div>
    </div>
  );
}

export default Info;
