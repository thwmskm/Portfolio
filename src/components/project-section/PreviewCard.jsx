import styles from "./PreviewCard.module.css";

function PreviewCard({ project }) {
  if (!project) return null;
  return (
    <>
      <div className={styles.card}>
        <img className={styles.sc} src={project.sc} alt={project.title} />
        <div className={styles.metaData}>
          {project.tags.map((tag) => (
            <div key={tag.tech} className={styles.techStack}>
              <div
                className={styles["circle"]}
                style={{ "--tag-color": tag.color }}
              ></div>
              <div>{tag.tech}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PreviewCard;
