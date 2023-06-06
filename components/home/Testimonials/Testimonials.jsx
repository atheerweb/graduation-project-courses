// MUI Components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// Components
import StudentsCards from "@/components/common/StudentsCards";
// Hooks
import { useSelector } from "react-redux";
// CSS Modules
import styles from "@/styles/modules/home/testimonials.module.css";

const Testimonials = (props) => {
    const testimonialsCards = useSelector(state => state.constants.value.testimonialsCards);

    return (
        <Box className={styles.testimonials}>
            <Typography variant="h2" textAlign="center">{props.header}</Typography>
            <Grid className={styles.testimonialsGrid}>
                {
                    testimonialsCards.map((card, index) => (
                        <StudentsCards key={index} title={card.title} subTitle={card.subTitle} body={card.body} />
                    ))
                }
            </Grid>
        </Box>
    )
}

export default Testimonials;