import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Rating from "@mui/material/Rating";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
// Hooks
import { useState } from "react";
import { useSelector } from "react-redux";
// CSS Modules
import styles from "@/styles/modules/courses/courses.module.css";

const Filters = ({ setFilters }) => {
    const [activeOption, setActiveOption] = useState("");
    const [rating, setRating] = useState(5);
    const checkboxes = useSelector(state => state.constants.value.coursesCheckboxes);
    const options = useSelector(state => state.constants.value.coursesOptions);

    return (
        <Box className={styles.filters}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                ترتيب حسب
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="ترتيب حسب"
                onChange={(event) => setActiveOption(event.target.value)}
                value={activeOption}
              >
                {
                  options.map((option, index) => (
                    <MenuItem key={index} value={option}>
                      {option}  
                    </MenuItem>
                  ))
                }
              </Select>
            </FormControl>
            <FormControl className={styles.checkboxes} component="fieldset" variant="standard">
                <FormLabel component="legend">
                    المسارات
                </FormLabel>
                <FormGroup>
                  {
                    checkboxes.map((checkbox, index) => (
                      <FormControlLabel
                        key={index}
                        sx={{m: 0}}
                        label={checkbox}
                        control={
                          <Checkbox name={checkbox} sx={{pr: 0}} />
                        }
                      />
                    ))
                  }
                </FormGroup>
            </FormControl>
            <Box>
                <Typography component="legend" sx={{mb: 1}}>
                    التقييم
                </Typography>
                <Rating
                    value={rating}
                    max={5}
                    dir="ltr"
                    name="unique-rating"
                    onChange={(event, newValue) => {setRating(newValue); setFilters({ratings: newValue})}}
                />
            </Box>
        </Box>
    )
}

export default Filters;