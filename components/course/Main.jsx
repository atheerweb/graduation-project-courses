// Components
import Intro from "./components/Intro/Intro";
import Content from "./components/Content/Content";
import Suggestions from "./components/Suggestions/Suggestions";
import Testimonials from "../common/Testimonials";
// MUI Components
import Box from "@mui/material/Box";
// CSS Modules
import styles from "@/styles/modules/course/course.module.css";

const Main = () => {
    return (
        <Box className={styles.main}>
            <Intro />
            <Content />
            <Testimonials header={"ماذا يقول خريجين المسار"} />
            <Suggestions />
        </Box>
    )
}

export default Main;