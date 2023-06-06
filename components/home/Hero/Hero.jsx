// MUI Components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// Next Components
import Image from "next/image";
// Hooks
import { useTheme } from "@mui/material/styles";
// CSS Modules
import styles from "@/styles/modules/home/hero.module.css";

const Hero = () => {
    const theme = useTheme();

    return (
        <Box className={styles.courses}>
            <Box className={styles.coursesTypographyContainer}>
                <Typography variant="h1">
                    طريقك للنجاح يبدأ من هنا
                </Typography>
                <Typography variant="h3" color={theme.palette.accent.primary}>
                    أفضل المعلمين من جميع أنحاء مصر و استمتع بأفضل العروص و الأسعار
                </Typography>
            </Box>
            <Image src={"/images/courses_hero.png"} width={338} height={425} alt="Hero" />
        </Box>
    )
}

export default Hero;