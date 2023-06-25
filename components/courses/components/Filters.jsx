import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
// Hooks
import { useState } from "react";
// CSS Modules
import styles from "@/styles/modules/courses/courses.module.css";

const Filters = ({ setFilters }) => {
    const [rating, setRating] = useState(1);

    return (
        <Box className={styles.filters}>
            <OutlinedInput 
                variant={"outlined"}
                type={"text"}
                placeholder={"بحث"}
                onChange={(event) => {setFilters({ type: "title", payload: event.target.value })}}
            />
            <Box>
                <Typography component="legend" sx={{mb: 1}}>
                    التقييم
                </Typography>
                <Rating
                    value={rating}
                    max={5}
                    dir="ltr"
                    name="unique-rating"
                    onChange={(event, newValue) => {setRating(newValue); setFilters({type: "ratings", payload: newValue})}}
                />
            </Box>
        </Box>
    )
}

export default Filters;