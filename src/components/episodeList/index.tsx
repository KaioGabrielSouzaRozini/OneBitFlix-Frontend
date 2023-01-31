import { EpisodeType } from "../../services/courseService";
import styles from "./styles.module.scss";

interface props {
  episode: EpisodeType;
}

const EpisodeList = function ({ episode }: props) {
  const handleSecondsToMin = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);

    const seconds = totalSeconds % 60;

    function toString(num: number) {
      return num.toString().padStart(2, "0");
    }

    const result = `${toString(minutes)}:${toString(seconds)}`;

    return result;
  };
  return (
    <>
      <div className={styles.episodeCard}>
        <div className={styles.episodeOrderTime}>
          <p className={styles.episodeOrder}>Episódio Nº {episode.order}</p>
          <p className={styles.episodeTime}>
            {handleSecondsToMin(episode.secondsLong)}
          </p>
        </div>
        <div className={styles.episodeTitleDescription}>
          <p className={styles.episodeTitle}>{episode.name}</p>
          <p className={styles.episodeDescription}>
            {episode.synopsis}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
            suscipit commodi repudiandae soluta reiciendis aperiam deserunt
            dolores beatae praesentium laborum accusantium quidem laudantium
            laboriosam ut minima ullam repellendus, aliquam exercitationem?
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            voluptates rem minus, accusamus neque saepe dolorum! Soluta impedit
            mollitia eius, vitae, quaerat enim quidem ratione quod sit
            reiciendis odit maxime!
          </p>
        </div>
      </div>
    </>
  );
};

export default EpisodeList;
