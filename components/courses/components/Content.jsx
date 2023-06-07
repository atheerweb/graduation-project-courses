// MUI Components
import Box from "@mui/material/Box";
// Components
import Data from "./Data";
import Filters from "./Filters";
// Hooks
import { useState } from "react";
// CSS Modules
import styles from "@/styles/modules/courses/courses.module.css";

const Content = () => {
    const [ filters, setFilters ] = useState({ratings: 5});
    
    return (
        <Box className={styles.content}>
            <Filters setFilters={setFilters} />
            <Data filters={filters} />
        </Box>
    )
}

export default Content;