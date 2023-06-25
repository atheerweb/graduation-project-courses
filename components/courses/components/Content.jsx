// MUI Components
import Box from "@mui/material/Box";
// Components
import Data from "./Data";
import Filters from "./Filters";
// Hooks
import { useReducer } from "react";
// CSS Modules
import styles from "@/styles/modules/courses/courses.module.css";

const reducer = (state, action) => {
    switch (action.type) {
        case "title": return { title: action.payload, ratings: state.ratings };
        default: return { title: state.title, ratings: action.payload };
    }
}

const Content = () => {
    const [ filters, setFilters ] = useReducer(reducer, {title: "", ratings: 5});
    
    return (
        <Box className={styles.content}>
            <Filters setFilters={setFilters} />
            <Data filters={filters} />
        </Box>
    )
}

export default Content;