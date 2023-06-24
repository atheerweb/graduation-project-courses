// MUI Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// Hooks
import { useSelector } from "react-redux";
// CSS Modules
import styles from "@/styles/modules/course/course.module.css";
import { useRouter } from "next/router";

const About = () => {
    const course = useSelector(state  => state.api.value.oneCourse);
    const router = useRouter();

    return (
        <Box className={styles.about}>
            <Typography variant="h3" color="accent">
                مسار
            </Typography>
            <Typography variant="h2">
                {course.course_name}
            </Typography>
            <Typography sx={{maxWidth: 575}}>
                {course.description}
            </Typography>
        </Box>
    )
}

export default About;