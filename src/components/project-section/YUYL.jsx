import styles from "./EvStore.module.css";
import { ArrowLeft } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { ArrowRight } from "lucide-react";

function YUYL({ project, onBack, onNext, onPrev }) {
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
        <p className={styles.subTitle}>Mobile Application | 2026</p>

        <section className={styles.contentSection}>
          <div className={styles.scBox}>
            <a
              href="https://github.com/thwmskm/OOTD"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={styles.projSc}
                src={project.sc}
                alt={project.title}
                data-cursor="enter"
              ></img>
            </a>
          </div>
          <aside className={styles.about}>
            <p>
              YU*YL (유일) is a <strong>React Native/Expo</strong> app for daily
              outfit journaling. <br></br>
              <br></br>
              One OOTD (Outfit Of The Day) photo a day, tracked with streaks, a
              calendar view, and closet management for clothing items and
              outfits, alongside tracking user's personal style stats and trends
              over time. Built with <strong>Expo Router</strong>,{" "}
              <strong>Zustand</strong> for state, and <strong>Firebase</strong>{" "}
              as a fully client-side backend, launched with an EAS build
              pipeline for deployment.
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
              href="https://github.com/thwmskm/OOTD"
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

export default YUYL;
