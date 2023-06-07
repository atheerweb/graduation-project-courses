// MUI Components
import Box from "@mui/material/Box";
// Components
import About from "./components/About";
import Video from "./components/Video";
// CSS Modules
import styles from "@/styles/modules/course/course.module.css";

const Intro = () => {
    return (
        <Box className={styles.intro}>
            <About />
            <Video />
        </Box>
    )
}

export default Intro;