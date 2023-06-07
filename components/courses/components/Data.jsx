// MUI Components
import Grid from "@mui/material/Grid";
// Components
import CoursesCards from "@/components/common/CoursesCards";
// Hooks
import { useSelector } from "react-redux";
// CSS Modules
import styles from "@/styles/modules/courses/courses.module.css";

const Data = ({ filters }) => {
    const cards = useSelector(state => state.constants.value.coursesCards).filter(card => card.ratings === filters.ratings);

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

export default Data;