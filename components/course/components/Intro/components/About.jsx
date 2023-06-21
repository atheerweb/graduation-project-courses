// MUI Components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// Hooks
import { useSelector } from "react-redux";
// CSS Modules
import styles from "@/styles/modules/course/course.module.css";

const About = () => {
    const course = useSelector(state  => state.api.value.oneCourse);

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
            <Box className={styles.checklistContainer}>
                <Box className={styles.checklist}>
                    <CheckCircleIcon color="secondary" />
                    <Typography>
                        فرونت إند
                    </Typography>
                </Box>
                <Box className={styles.checklist}>
                    <CheckCircleIcon color="secondary" />
                    <Typography>
                        باك إند
                    </Typography>
                </Box>
                <Box className={styles.checklist}>
                    <CheckCircleIcon color="secondary" />
                    <Typography>
                        داتا بيزس
                    </Typography>
                </Box>
            </Box>
            <Button variant="contained" color="primary" sx={{color: "white", width: "fit-content"}}>
                إبدأ مسارى المهنى
            </Button>
        </Box>
    )
}

export default About;