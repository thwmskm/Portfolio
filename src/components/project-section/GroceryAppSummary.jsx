import styles from "./GroceryAppSummary.module.css";
import { X } from "lucide-react";

function GroceryAppSummary({ onClose }) {
  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.closeComponent}
          data-cursor="link"
          onClick={onClose}
        >
          <X className={styles.closeBtn}></X>
          <div className={styles.close}>Close</div>
        </div>
        <section className={styles.contentSection}>
          <div className={styles.homeSection}>
            <div className={`${styles.scBox}${styles.homeSc}`}>
              <img
                className={styles.projSc}
                src="/gl_home.jpg"
                alt="Grocery Cart Page"
              ></img>
            </div>
            <aside className={styles.aboutHome}>
              <p>
                On launch, the home page provides a personal list where it
                displays the items and their quantities that the user has added.
                Shaking the mobile device will trigger the{" "}
                <strong>Text-to-Speech</strong> and the user's list will be read
                out to them including the quantity of each item. This feature
                provides accessibility for those with impairments.
              </p>
            </aside>
          </div>
          <div className={styles.editSection}>
            <div className={`${styles.scBox}${styles.editSc}`}>
              <img
                className={styles.projSc}
                src="/gl_edit.jpg"
                alt="Grocery Item Edit Page"
              ></img>
            </div>
            <aside className={styles.aboutEdit}>
              <p>
                Users can edit the quantity of individual items by clicking the
                specific item on their list.
              </p>
            </aside>
          </div>
          <div className={styles.addSection}>
            <div className={`${styles.scBox}${styles.addSc}`}>
              <img
                className={styles.projSc}
                src="/gl_add.jpg"
                alt="Grocery Add Page"
              ></img>
            </div>
            <aside className={styles.aboutAdd}>
              <p>
                Clicking the + button from the home page takes users to the add
                page, where they can search for their desired items. There are
                three main methods to search for items, using the search bar
                using a soft keyboard, <strong>Voice-to-Text </strong>
                while holding the icon on the top right, or manually scrolling
                through the catalogue. Users can simply click the "ADD" button
                to add all selected items to their list.
              </p>
            </aside>
          </div>
          <div className={styles.voiceSection}>
            <div className={`${styles.scBox}${styles.voiceSc}`}>
              <img
                className={styles.projSc}
                src="/gl_found.jpg"
                alt="Voice-to-Text Result Page"
              ></img>
            </div>
            <aside className={styles.aboutVoice}>
              <p>
                After holding the mic icon in the top right and speaking the
                desired item, a result page will show up with the found items
                from the <strong>Voice-to-Text</strong>. In the example to the
                right, the result page is shown after the user said "milk",
                listing all items related to "milk".
              </p>
            </aside>
          </div>
        </section>
      </div>
    </>
  );
}

export default GroceryAppSummary;
