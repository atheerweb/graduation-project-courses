// MUI Components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// Hooks
import { useApi } from "@/lib/hooks";
import { useRouter } from "next/router";
// CSS Modules
import styles from "@/styles/modules/course/course.module.css";

const About = () => {
    const { query: { id } } = useRouter();
    const course = useApi(`/courses/course/${id}`);

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