// MUI Components
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Favorite from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// Framer Motion
import { motion } from "framer-motion";
// Hooks
import { useTheme } from "@mui/material/styles";
// CSS Modules
import styles from "@/styles/modules/home/tracks.module.css";

const Cards = (props) => {
    const theme = useTheme();

    return (
        <Card sx={{maxWidth: 367}} dir="rtl" component={motion.div} animate={{x: props.translate}} transition={{type: "spring", duration: 0.75 }} className={styles.tracksCards}>
            <CardHeader
                title={props.title}
                subheader={
                    <Stack direction="row" className={styles.tracksCardsSubheaderStack}>
                        <Rating readOnly value={props.ratings} />
                        <Typography>{props.subTitle}</Typography>
                    </Stack>
                }
            />
            <CardMedia component="img" height="194" image="/images/courses_tracks_cards.png" alt="Track" />
            <CardActions disableSpacing>
                <Stack direction="row" className={styles.tracksCardsActionsStack}>
                    <Link href={`/course/${props.id}`} sx={{color: theme.palette.secondary.main, textDecoration: "none"}}>شاهد</Link>
                    <IconButton disabled aria-label="add to favorites">
                        <Favorite />
                    </IconButton>
                </Stack>
            </CardActions>
        </Card>
    )
}

export default Cards;