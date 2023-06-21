// MUI Components
import Grid from "@mui/material/Grid";
// Components
import CoursesCards from "@/components/common/CoursesCards";
// Hooks
import { useApi } from "@/lib/hooks";
import { useRouter } from "next/router";
// CSS Modules
import styles from "@/styles/modules/courses/courses.module.css";

const Data = ({ filters }) => {
    const { query } = useRouter();
    const cards = useApi(`/courses/category_fliter/?cat_has_courses__category_name=${query.slug}`);

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