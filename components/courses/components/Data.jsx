// MUI Components
import Grid from "@mui/material/Grid";
// Components
import CoursesCards from "@/components/common/CoursesCards";
// Hooks
import { useSelector } from "react-redux";
// CSS Modules
import styles from "@/styles/modules/courses/courses.module.css";

const Data = (props) => {
    const cards = useSelector(state => state.api.value.categoryCourses).filter((card) => {
          if (card.course_name.includes(props.filters.title)) {
            if (card.ratings >= props.filters.ratings) {
              return card;
            }
          }
      });

    return (
        <Grid className={styles.grid}>
            {
                cards.map((card, index) => (
                    <CoursesCards key={index} content={card} />
                ))
            }
        </Grid>
    )
}

export default Data;;