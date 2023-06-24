// MUI Components
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
// Hooks
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
// CSS Modules
import styles from "@/styles/modules/course/course.module.css";

const Content = () => {
    const accordions = useSelector(state => state.constants.value.courseAccordions);
    const router = useRouter();

    return (
        <Box className={styles.content}>
            <Typography variant="h2">
                المحتوي الدراسي
            </Typography>
            <Box sx={{width: "75%"}}>
                {
                    accordions.map((accordion, index) => (
                        <Accordion key={accordion.id} disabled={index !== 0} sx={{width: "100%"}}>
                            <AccordionSummary
                              expandIcon={index !== 0 ? <LockOutlinedIcon /> : <ExpandMore />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                            >
                              <Typography variant="h6">
                                  {accordion.track}
                              </Typography>
                            </AccordionSummary>
                            {
                                accordion.content.map((lesson, index) => (
                                    <AccordionDetails key={index} sx={{backgroundColor: index !== 0 ? "lightgray" : "white", borderTop: "solid silver 1px"}}>
                                      <Box className={styles.accordionItem}>
                                          <Typography color={index !== 0 ? "GrayText" : "primary"}>
                                            {lesson.title}
                                          </Typography>
                                          <Box className={styles.accordionItemButtonContainer}>
                                              <Typography color={index !== 0 ? "GrayText" : "primary"}>
                                                  {lesson.duration}
                                              </Typography>
                                              <Button disabled={index !== 0} onClick={() => window.scrollTo(0, 0)} variant="outlined">
                                                  شاهد
                                              </Button>
                                          </Box>
                                      </Box>
                                    </AccordionDetails>
                                ))
                            }
                        </Accordion>
                    ))
                }
            </Box>
        </Box>
    )
}

export default Content;