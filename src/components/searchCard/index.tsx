import Link from "next/link";
import { CourseType } from "../../services/courseService";
import styles from "./styles.module.scss";

interface props {
  course: CourseType;
}

const SearchCard = function ({ course }: props) {
  return (
    <>
      <Link href={`/course/${course.id}`} className={styles.normalText}>
        <div className={styles.searchCard}>
          <img
            src={`${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl}`}
            alt={course.name}
            className={styles.searchCardImg}
          />
          <p className={styles.searchCardTitle}>{course.name}</p>
          <p className={styles.searchCardDescription}>{course.synopsis}</p>
        </div>
      </Link>
    </>
  );
};

export default SearchCard;
