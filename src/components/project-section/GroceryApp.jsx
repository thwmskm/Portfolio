import styles from "./GroceryApp.module.css";
import { ArrowLeft } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { ArrowRight } from "lucide-react";

function GroceryApp({ project, onBack, onNext, onPrev, onSummary }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleSection}>
          <h2 className={styles.title}>{project.title}</h2>
          <div
            className={styles.backComponent}
            data-cursor="link"
            onClick={onBack}
          >
            <ArrowLeft className={styles.backBtn}></ArrowLeft>
            <div className={styles.bk2Proj}>Projects</div>
          </div>
        </div>
        <p className={styles.subTitle}>Mobile Application | 2024</p>

        <section className={styles.contentSection}>
          <div className={styles.scBox}>
            <img
              className={styles.projSc}
              src={project.sc}
              alt={project.title}
              data-cursor="enter"
              onClick={() => onSummary(2)}
            ></img>
          </div>
          <aside className={styles.about}>
            <p>
              Built with <strong>Java</strong> in{" "}
              <strong>Android Studio</strong>, this smart grocery app was
              developed as a user-centered research project focused on improving
              accessibility for individuals with visual impairments. Through{" "}
              <strong>voice-to-text</strong> and <strong>text-to-speech</strong>{" "}
              interactions, it transforms everyday shopping into a simple and
              intuitive yet effective experience. Designed for performance,
              usability, and user satisfaction. Real-time UX research was
              conducted for effectiveness and to ensure appropriate
              accomodations.
            </p>
            <a
              onClick={() => onSummary(2)}
              className={styles.link}
              data-cursor="link"
            >
              View Details
              <ArrowUpRight className={styles.linkArrow}></ArrowUpRight>
            </a>
            <a
              href="/GroceryListApp_ResearchPaper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              data-cursor="link"
            >
              Research Paper
              <ArrowUpRight className={styles.linkArrow}></ArrowUpRight>
            </a>
            <a
              href="https://github.com/thwmskm/Grocery-List-App"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              data-cursor="link"
            >
              Github Repo
              <ArrowUpRight className={styles.linkArrow}></ArrowUpRight>
            </a>
          </aside>

          <aside className={styles.tech}>
            <p>Selected Technology</p>
            <div className={styles.techLinks}>
              {project.tags.map((tag) => (
                <a
                  key={tag.tech}
                  href={tag.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.techName}
                  data-cursor="link"
                >
                  {tag.tech}
                  <ArrowUpRight className={styles.linkArrow}></ArrowUpRight>
                </a>
              ))}
            </div>
          </aside>
        </section>

        <section className={styles.navSection}>
          <div className={styles.list}>
            <div className={styles.line}></div>
            <article onClick={onNext} data-cursor="link">
              <div className={styles.evWrapper}>
                <ArrowRight className={styles.arrow}></ArrowRight>
                <div className={styles.nxtPrv}>Next</div>
              </div>
            </article>
            <article onClick={onPrev} data-cursor="link">
              <div className={styles.evWrapper}>
                <ArrowRight className={styles.arrow}></ArrowRight>
                <div className={styles.nxtPrv}>Previous</div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}

export default GroceryApp;
