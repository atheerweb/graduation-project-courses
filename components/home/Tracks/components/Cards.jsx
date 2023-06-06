import { Card, CardHeader, CardMedia, CardActions, IconButton, Stack, Rating, Typography, Link } from "@mui/material";
import { motion } from "framer-motion";
import { Favorite } from "@mui/icons-material";
import styles from "@/styles/modules/home/tracks.module.css";
import { useTheme } from "@mui/material/styles";

const Cards = (props) => {
    const theme = useTheme();

    return (
        <Card component={motion.div} animate={{x: props.translate}} transition={{type: "spring", duration: 0.75 }} className={styles.tracksCards}>
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
                    <IconButton aria-label="add to favorites">
                        <Favorite />
                    </IconButton>
                    <Link href="" sx={{color: theme.palette.secondary.main, textDecoration: "none"}}>شاهد</Link>
                </Stack>
            </CardActions>
        </Card>
    )
}

export default Cards;