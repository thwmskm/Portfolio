import styles from "./EvStore.module.css";
import { ArrowLeft } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { ArrowRight } from "lucide-react";

function EvStore({ project, onBack, onNext, onPrev }) {
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
        <p className={styles.subTitle}>Web Application | 2025</p>

        <section className={styles.contentSection}>
          <div className={styles.scBox}>
            <a
              href="https://ecommerce-site-frontend-drab.vercel.app/"
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
              A <strong>Full-Stack</strong>, secure web application built with
              <strong> React, Node.js, MySQL,</strong> and
              <strong> AWS, </strong>
              powered by <strong>RESTful APIs</strong> for seamless data
              management. <br></br>
              <br></br>Effortlessly explore and filter electric vehicles, drive
              into detailed pages with specs and user reviews, and interact with
              a chatbot to steer through real-time assistance. The platform also
              features a secure admin dashboard for managing listings and
              inventory. Fully cloud-implemented using{" "}
              <strong>AWS's RDS</strong>, <strong>Vercel</strong>, and{" "}
              <strong>Render</strong>.
            </p>
            <a
              href="https://ecommerce-site-frontend-drab.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              data-cursor="link"
            >
              Electric Vehicle Store
              <ArrowUpRight className={styles.linkArrow}></ArrowUpRight>
            </a>
            <a
              href="https://github.com/thwmskm/Ecommerce-Site"
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

export default EvStore;
