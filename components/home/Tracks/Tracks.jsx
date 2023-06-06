import { Box, Typography, Stack, Button } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import Cards from "./components/Cards";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import styles from "@/styles/modules/home/tracks.module.css";

const Tracks = () => {
    const state = useSelector(state => state.constants.value);
    const theme = useTheme();
    const [translateCarousel, setTranslateCarousel] = useState(0);
    const [activeTrack, setActiveTrack] = useState("statistics");

    const handleTrackClick = (newTrack) => {
        setActiveTrack(newTrack);
    }

    const handleCarousel = (arrow) => {
        if (arrow === "Next") {
            Math.abs(translateCarousel) === (state.coursesTracksCards[activeTrack].length - 1) * 367 ?
            setTranslateCarousel(0) :
            setTranslateCarousel(previous => previous - 367)
        } else {
            translateCarousel < 0 && setTranslateCarousel(previous => previous + 367);
        }
    }

    return (
        <Box className={styles.tracks}>
            <Typography variant="h2">مساراتنا</Typography>
            <Stack direction="row" className={styles.tracksStack} sx={{transtion: 1000}}>
                {
                    state.coursesTracks.map((track, index) => (
                        <Button key={index}
                                className={styles.tracksButtons} 
                                sx={{
                                    backgroundColor: activeTrack === track[0] ? theme.palette.primary.main : "rgb(217 217 217)",
                                    color: activeTrack === track[0] ? "white" : "black",
                                    borderRadius: "16px"
                                }}
                                onClick={() => handleTrackClick(track[0])}
                        >
                            {track[1]}
                        </Button>
                    ))
                }
            </Stack>
            <Stack direction="row" alignItems="center" padding="18px 22px">
                <ArrowBackIos className={styles.tracksIcons} onClick={() => handleCarousel("Back")} />
                    <Stack component={motion.div} transition={{type: "spring", duration: 1.5}} direction="row" className={styles.tracksCardsStack}>
                        {
                            state.coursesTracksCards[activeTrack].map((card, index) => (
                                <Cards key={index} title={card.title} subTitle={card.subTitle} ratings={card.ratings} translate={translateCarousel} />
                            ))
                        }
                    </Stack>
                <ArrowForwardIos className={styles.tracksIcons} onClick={() => handleCarousel("Next")} />
            </Stack>
        </Box>
    )
}

export default Tracks;