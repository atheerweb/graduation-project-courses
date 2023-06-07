// MUI Components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// CSS Modules
import styles from "@/styles/modules/course/course.module.css";

const About = () => {
    return (
        <Box className={styles.about}>
            <Typography variant="h3" color="accent">
                مسار
            </Typography>
            <Typography variant="h2">
                فول استاك ويب
            </Typography>
            <Typography sx={{maxWidth: 575}}>
                بصفته مقبسًا لجميع المهن (وسيدًا لعدد قليل جدًا) ، يمكن لمهندس Full-Stack إنجاز المشروع من
                البداية إلى النهاية. احصل على المهارات المتخصصة والمحفظة التي تحتاجها لبدء حياتك المهنية كمهندس
                متكامل في هذا المسار الوظيفي المنسق.
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