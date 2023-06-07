// MUI Components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// Components
import CoursesCards from "@/components/common/CoursesCards";
import { useSelector } from "react-redux";
// CSS Modules
import styles from "@/styles/modules/course/course.module.css";

const Suggestions = () => {
    const cards = useSelector(state => state.constants.value.coursesCards).slice(0, 3);

    return (
        <Box className={styles.suggestions}>
            <Typography variant="h2">
                مسارات مقترحة
            </Typography>
            <Grid className={styles.grid}>
                {
                    cards.map((card, index) => (
                        <CoursesCards key={index} content={card} />
                    ))
                }
            </Grid>
        </Box>
    )
}

export default Suggestions;