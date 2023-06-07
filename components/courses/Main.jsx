// MUI Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// Components
import Content from "./components/Content";
// CSS Modules
import styles from "@/styles/modules/courses/courses.module.css";

const Course = () => {
    return (
        <Box className={styles.courses}>
            <Typography variant="h2">
                كورسات البرمجة
            </Typography>
            <Content />
        </Box>
    )
}

export default Course;