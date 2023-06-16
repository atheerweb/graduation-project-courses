// MUI Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// Components
import Content from "./components/Content";
// Hooks
import { useRouter } from "next/router";
// CSS Modules
import styles from "@/styles/modules/courses/courses.module.css";

const Course = () => {
    const { query: { slug } } = useRouter();

    return (
        <Box className={styles.courses}>
            <Typography variant="h2">
                كورسات {slug}
            </Typography>
            <Content />
        </Box>
    )
}

export default Course;