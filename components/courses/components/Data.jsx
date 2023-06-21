// MUI Components
import Grid from "@mui/material/Grid";
// Components
import CoursesCards from "@/components/common/CoursesCards";
// Hooks
import { useSelector } from "react-redux";
// CSS Modules
import styles from "@/styles/modules/courses/courses.module.css";

const Data = () => {
    const cards = useSelector(state => state.api.value.categoryCourses);

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