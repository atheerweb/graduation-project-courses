// MUI Components
import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Cards from "./components/Cards";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// Framer Motion
import { motion } from "framer-motion";
// Hooks
import { useApi } from "@/lib/hooks";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
// CSS Modules
import styles from "@/styles/modules/home/tracks.module.css";



const Tracks = () => {
  const state = useSelector((state) => state.constants.value);
  const categories = useSelector((state) => state.api.value.categories).map(
    (category) => category.category_name
  );
  const theme = useTheme();
  const [translateCarousel, setTranslateCarousel] = useState(0);
  const [activeTrack, setActiveTrack] = useState(categories[0]);
  const courses = useApi(
    `/courses/category_fliter/?cat_has_courses__category_name=${activeTrack}`
  );

  const handleTrackClick = (newTrack) => {
    setActiveTrack(newTrack);
  };

  const handleCarousel = (arrow) => {
    if (courses) {
      if (arrow === "Next") {
        Math.abs(translateCarousel) === (courses.length - 1) * 367
          ? setTranslateCarousel(0)
          : setTranslateCarousel((previous) => previous - 367);
      } else {
        translateCarousel < 0 &&
          setTranslateCarousel((previous) => previous + 367);
      }
    }
  };

  return (
    <Box className={styles.tracks}>
      <Typography variant="h2">مساراتنا</Typography>
      <Stack
        direction="row"
        className={styles.tracksStack}
        sx={{ transtion: 1000 }}
      >
        {categories.map((track, index) => (
          <Button
            key={index}
            className={styles.tracksButtons}
            sx={{
              backgroundColor:
                activeTrack === track
                  ? theme.palette.primary.main
                  : "rgb(217 217 217)",
              color: activeTrack === track ? "white" : "black",
              borderRadius: "16px",
            }}
            onClick={() => handleTrackClick(track)}
          >
            {track}
          </Button>
        ))}
      </Stack>
      <Stack dir="ltr" direction="row" alignItems="center" padding="18px 22px">
        <ArrowBackIos
          className={styles.tracksIcons}
          onClick={() => handleCarousel("Back")}
        />
        <Stack
          component={motion.div}
          transition={{ type: "spring", duration: 1.5 }}
          direction="row"
          className={styles.tracksCardsStack}
        >
          {courses &&
            courses.map((course) => (
              <Cards
                key={course.course_id}
                id={course.course_id}
                title={course.course_name}
                subTitle={course.description}
                price={course.price}
                ratings={Math.floor(Math.random() * 5 + 1)}
                translate={translateCarousel}
              />
            ))}
        </Stack>
        <ArrowForwardIos
          className={styles.tracksIcons}
          onClick={() => handleCarousel("Next")}
        />
      </Stack>
    </Box>
  );
};

export default Tracks;
